function Ninja() {
    this.swung = false;
    this.swingSword = function () {
        return !this.swung;
    };
}

Ninja.prototype.swingSword = function () {
    return this.swung;
};

var ninja = new Ninja();
console.log(ninja.swingSword());