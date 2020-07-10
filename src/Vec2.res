open Belt
open Js.Typed_array

type t = (float, float)

let flatten = (vecs: array<t>): ArrayBuffer.t => {
    let arr = Float32Array.fromLength(2 * Array.length(vecs))
    Array.forEachWithIndex(vecs, (i, (x ,y)) => {
        arr->Float32Array.unsafe_set(i * 2, x)
        arr->Float32Array.unsafe_set(1 + i * 2, y)
    })
    arr->Float32Array.buffer
}