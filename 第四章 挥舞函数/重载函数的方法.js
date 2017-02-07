/**
 * 定义addMethod方法接收三个参数：
 * 1. 要绑定方法的对象
 * 2. 绑定发放所用的属性名
 * 3。 要绑定的方法
 */
function addMethod(object, name, fn) {
    // 保存原有的函数，调用的时候可能不匹配传入的参数个数
    var old = object[name];

    object[name] = function () {
        // 如果该匿名函数的形参个数和实参个数匹配，就调用该函数
        if (fn.length == arguments.length) {
            return fn.apply(this, arguments);
        } else if (typeof old === 'function') {
            return old.apply(this, arguments);
        }
    }
}

var ninja = {};
addMethod(ninja, 'whatever', function () {/**/ });
addMethod(ninja, 'whatever', function (a) {/**/ });
addMethod(ninja, 'whatever', function (a, b) {/**/ });