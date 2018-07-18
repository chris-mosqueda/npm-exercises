const $ = require('jquery');

$("body").css("background-color", "green");

let sayHello = myphrase => console.log(`Hello ${myphrase}`);
sayHello("Newby");

const getMsg = require('./say-hello.js');