Function.prototype.bind = function (context) {
    var args = Array.prototype.slice(arguments, 1),
        F = function () { },
        self = this,
        bound = function () {
            var innerArgs = Array.prototype.slice.call(arguments);
            var finalArgs = args.concat(innerArgs);
            return self.apply((this instanceof F ? this : context), finalArgs);
        };

    F.prototype = self.prototype;
    bound.prototype = new F();
    return bound;
};