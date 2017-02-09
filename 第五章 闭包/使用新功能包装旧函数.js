// 定义一个包装函数，接收3个参数：方法所属对象、方法名称、执行方法
function wrap(object, method, wrapper) {
    // 保存原函数，后面可以通过闭包进行引用
    var fn = object[method];
    // 创建新函数调用作为包装器传入的函数
    return object[method] = function () {
        // 使用apply强制将函数上下文设置为object对象，并将其作为参数与原始参数一起传递给原有方法
        return wrapper.apply(this, [fn.bind(this)].concat(Array.prototype.slice.call(arrguments)));
    };
}

if (Prototype.Browser.Opera) {
    wrap(Element.Methods, "readAttribute", function (original, elem, attr) {
        return attr == "title" ? elem.title : original(elem, attr);
    });
}