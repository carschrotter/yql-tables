var MNHcC = {
    forEach: {
        'array': function(callback /*, thisArg*/)
        {
            if (typeof callback !== "function") {
                throw new TypeError();
            }

            var thisArg = arguments[1] || this;
            var interCallback = callback.bind(thisArg);

            for (var i = 0; i < this.length; i++)
            {
                if (i in this) {
                    interCallback.call(this[i], i, this);
                }
            }
        },
        'object': function(callback /*, thisArg */)
        {
            if (typeof callback !== "function") {
                throw new TypeError();
            }
            var thisArg = arguments[1] || this;
            var interCallback = callback.bind(thisArg);

            for (var key in this) {
                if (key in this) {
                    interCallback.call(this[key], key, this);
                }
            }
        }
    },
    'bind': function(oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function() {
        },
                fBound = function() {
            return fToBind.apply(this instanceof fNOP && oThis
                    ? this
                    : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    }
};
Object.prototype.Each = MNHcC.forEach.object;
Array.prototype.Each = MNHcC.forEach.array;

if (!Function.prototype.bind) {
    Function.prototype.bind = MNHcC.bind;
}
if (!Object.prototype.forEach) {
    Object.prototype.forEach = MNHcC.forEach.object;
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = MNHcC.forEach.array;
}