{
  open Belt
  open WebGl
  open Vec2

  let rec divideTriangles = (a, b, c, count): array<Vec2.t> => {
    if count == 0 {
      [a, b, c]
    } else {
      let ab = a->mix(b, 0.5)
      let ac = a->mix(c, 0.5)
      let bc = b->mix(c, 0.5)

      [
        divideTriangles(a, ab, ac, count - 1),
        divideTriangles(b, bc, ab, count - 1),
        divideTriangles(c, ac, bc, count - 1),
      ]->Array.concatMany
    }
  }

  let _SUBDIVISIONS = 5

  let canvas = getCanvas()->Option.getExn
  let gl = canvas->getContext->Option.getExn

  let vertexShader =
    gl
    ->makeVertexShader(
      `
      attribute vec4 vPosition;

      void main() {
        gl_Position = vPosition;
      }
      `,
    )
    ->Option.getExn

  let fragmentShader =
    gl
    ->makeFragmentShader(
      `
      precision mediump float;

      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,
    )
    ->Option.getExn

  let program = gl->makeProgram(vertexShader, fragmentShader)->Option.getExn

  gl->useProgram(program)

  let (v0, v1, v2) = ((-1.0, -1.0), (0.0, 1.0), (1.0, -1.0))

  let vertices = divideTriangles(v0, v1, v2, _SUBDIVISIONS)

  let buffer = gl->createBuffer->Option.getExn
  gl->bindBuffer(#ArrayBuffer, buffer)
  gl->bufferData(#ArrayBuffer, vertices->Vec2.flatten, #StaticDraw)

  let vPosition = gl->getAttribLocation(program, "vPosition")->Option.getExn
  gl->vertexAttribPointer(
    vPosition,
    ~size=2,
    ~dataType=#Float,
    ~normalized=false,
    ~stride=0,
    ~offset=0,
  )
  gl->enableVertexAttribArray(vPosition)

  gl->viewport(~x=0, ~y=0, ~width=canvas->width, ~height=canvas->height)
  gl->clearColor(~r=1.0, ~g=1.0, ~b=1.0, ~a=1.0)
  gl->clear(#ColorBuffer)
  gl->drawArrays(#Triangles, ~offset=0, ~count=vertices->Array.length)
}
