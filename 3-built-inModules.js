//Builtin Modules
//os, path, fs, http

//Modules
//Every file in node is a module by default
const names = require('./4-varNames');
const sayHi = require('./5-utils');
const data = require('./6-alternate');

//console.log(data);

sayHi('HR');
sayHi(names.john);
sayHi(names.peter);