function Ninja() { }

Ninja.prototype.swingSword = function () {
    return true;
};

var ninja1 = Ninja();
console.log(ninja1);

var ninja2 = new Ninja();
console.log(ninja2);
console.log(ninja2.swingSword);
console.log(ninja2.swingSword());