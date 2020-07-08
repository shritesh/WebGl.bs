type canvasT
type glT

type vertexShaderT
type fragmentShaderT
type programT

let canvas: option<canvasT>
let width: canvasT => int
let height: canvasT => int

let getContext: canvasT => option<glT>
let viewport: (glT, ~x: int, ~y: int, ~width: int, ~height: int) => unit

let createVertexShader: (glT, string) => option<vertexShaderT>
let createFragmentShader: (glT, string) => option<fragmentShaderT>

let createProgram: (glT, vertexShaderT, fragmentShaderT) => option<programT>
let useProgram: (glT, programT) => unit