"use strict";
import * as core from "./core.js";

let mGLVertexBuffer = null;
function get(){
    return mGLVertexBuffer;
}

//  1     0
//  -------  
//  |     |
//  |     |
//  -------
//  3     2
//
// Triangles: 012  and 132 

let mVerticesOfSquare = [
     0.5,  0.5, 0.0,
    -0.5,  0.5, 0.0,
     0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
];

function init(){
    let gl=core.getGL();

    //A - create buffer
    mGLVertexBuffer=gl.createBuffer();

    //B - bind it and activate it
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBuffer);

    //C - load vertices
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerticesOfSquare), gl.STATIC_DRAW);
}

export {get, init}
