const $ = require('jquery');

$("body").css("background-color", "green");

let sayHello = myphrase => console.log(`Hello ${myphrase}`);
sayHello("Chris");

const getMsg = require('./say-hello.js');

import { square, diag } from './some-math.js';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
//OR
// import * as lib from './say-hello';
// console.log(lib.square(11)); // 121
// console.log(lib.diag(4, 3)); // 5