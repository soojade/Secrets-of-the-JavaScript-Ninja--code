function Ninja() { }

var ninja = new Ninja();
var ninja2 = new ninja.constructor();

console.log(ninja2 instanceof Ninja); // true
console.log(ninja !== ninja2); // true