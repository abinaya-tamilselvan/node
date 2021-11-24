const hello = "abi";
console.log(hello);
const name = require('./1-names')
const sayHello =require('./2-names')
const data = require('./3-names')
sayHello('john')
sayHello(name.abi)
sayHello(name.arthi)
console.log(data);
