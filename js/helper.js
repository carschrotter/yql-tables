Object.prototype.forEach = function(callback /*, thisp*/)
{
    if (typeof callback !== "function") {
        throw new TypeError();
    }
    var thisp = arguments[1] || this;
    var interCallback = interCallback.bind(thisp);
    for (var key in this) {
        if (key in this) {
            interCallback.call(this[key], key, this);
        }
    }
};
