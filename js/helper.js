Object.prototype.forEach = function(callback /*, thisp*/)
{
    if (typeof callback !== "function") {
        throw new TypeError();
    }

    var thisp = arguments[1];
    for (var i = 0; i < this.length; i++)
    {
        if (i in this) {
            callback.call(thisp, this[i], i, this);
        }
    }
};
