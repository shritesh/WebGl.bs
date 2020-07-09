open Belt
open Js.Typed_array

type canvasT
type glT

type clearMaskT = [ #ColorBuffer ]

type drawModeT = [ #Triangles ]

type shaderT
type vertexShaderT = shaderT
type fragmentShaderT = shaderT

type programT

type bufferT

type targetT = [ #ArrayBuffer ]
type usageT = [ #StaticDraw ]

type attribLocationT = int

type dataTypeT = [ #Float ]

@bs.val @bs.scope("document") @bs.return(nullable) external canvas: @bs.as("canvas") _ => option<canvasT> = "querySelector"
@bs.get external width: canvasT => int = "width"
@bs.get external height: canvasT => int = "height"

@bs.send @bs.return(nullable) external getContext: (canvasT, @bs.as("webgl") _) => option<glT> = "getContext"
@bs.send external viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit = "viewport"
@bs.send external clearColor: (glT, ~r: float, ~g: float, ~b: float, ~a: float) => unit = "clearColor"

@bs.send external clear: (glT, @bs.int [@bs.as(0x00004000) #ColorBuffer]) => unit = "clear"

@bs.send external drawArrays: (glT, @bs.int [@bs.as(0x0004) #Triangles], ~offset: int, ~count: int) => unit = "drawArrays"

@bs.send @bs.return(nullable) external createShader: (glT, @bs.int [@bs.as(0x8B31) #vertexShader | @bs.as(0x8B30) #fragmentShader]) => option<shaderT> = "createShader"

@bs.send external shaderSource: (glT, shaderT, string) => unit = "shaderSource"
@bs.send external compileShader: (glT, shaderT) => unit = "compileShader"
@bs.send external getShaderParamBool: (glT, shaderT, @bs.int [@bs.as(0x8B81) #compileStatus]) => bool = "getShaderParameter"

@bs.send external createProgram: glT => option<programT> = "createProgram" 
@bs.send external attachShader: (glT, programT, shaderT) => unit = "attachShader"
@bs.send external linkProgram: (glT, programT) => unit = "linkProgram"
@bs.send external getProgramParamBool: (glT, programT, @bs.int [@bs.as(0x8B82) #linkStatus]) => bool = "getProgramParameter"
@bs.send external useProgram: (glT, programT) => unit = "useProgram"

@bs.send @bs.return(nullable) external createBuffer: glT => option<bufferT> = "createBuffer"
@bs.send external bindBuffer: (glT, @bs.int [@bs.as(0x8892) #ArrayBuffer], bufferT) => unit = "bindBuffer"
@bs.send external bufferData: (glT, @bs.int [@bs.as(0x8892) #ArrayBuffer], ArrayBuffer.t, @bs.int [@bs.as(0x88E4) #StaticDraw]) => unit = "bufferData"

@bs.send external _getAttribLocation: (glT, programT, string) => int = "getAttribLocation"
@bs.send external vertexAttribPointer: (glT, attribLocationT, ~size: int, ~dataType: @bs.int [@bs.as(0x1406) #Float], ~normalized: bool, ~stride: int, ~offset: int) => unit = "vertexAttribPointer"
@bs.send external enableVertexAttribArray: (glT, attribLocationT) => unit = "enableVertexAttribArray"

let makeShader = (ctx:glT, typ: [#vertexShader | #fragmentShader], src: string): option<shaderT> => {
    ctx
    ->createShader(typ)
    ->Option.flatMap(shader => {
        ctx->shaderSource(shader, src)
        ctx->compileShader(shader)
        if ctx->getShaderParamBool(shader, #compileStatus) {
            Some(shader)
        } else {
            None
        }
    })
}

let makeVertexShader = (ctx: glT, src: string): option<vertexShaderT> => {
    ctx->makeShader(#vertexShader, src)
}

let makeFragmentShader = (ctx: glT, src: string): option<fragmentShaderT> => {
    ctx->makeShader(#fragmentShader, src)
}

let makeProgram = (ctx: glT, vert: vertexShaderT, frag: fragmentShaderT): option<programT> => {
    ctx
    ->createProgram
    ->Option.flatMap(program => {
        ctx->attachShader(program, vert)
        ctx->attachShader(program, frag)
        ctx->linkProgram(program)
        if ctx->getProgramParamBool(program, #linkStatus) {
            Some(program)
        } else {
            None
        }
    })
}

let getAttribLocation = (ctx: glT, program: programT, src: string): option<attribLocationT> => {
    switch _getAttribLocation(ctx, program, src) {
        | -1 => None
        | loc => Some(loc)
    }
}