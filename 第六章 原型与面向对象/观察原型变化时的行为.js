function Ninja() {
    this.swung = true;
    // 定义与原型方法同名的实例方法
    this.swingSword = function () {
        return !this.swung;
    };
}

var ninja = new Ninja();
Ninja.prototype.swingSword = function () {
    return this.swung;
}
ninja.swingSword(); // false