function Person() { }
Person.prototype.dance = function () { };

function Ninja() { }
// 将Ninja的原型设为Person的实例
Ninja.prototype = new Person();

var ninja = new Ninja();
console.log(ninja instanceof Ninja); // true
console.log(ninja instanceof Person); // true
console.log(ninja instanceof Object); // true
console.log(typeof ninja.dance == "function"); // true