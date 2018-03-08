var Complex = /** @class */ (function () {
    function Complex(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Complex.prototype.magintudeSquared = function () {
        return this.x * this.x + this.y * this.y;
    };
    Complex.prototype.magnitude = function () {
        return Math.sqrt(this.magintudeSquared());
    };
    Complex.prototype.dotProduct = function (other) {
        return this.x * other.x + this.y * other.y;
    };
    Complex.dotProduct = function (first, second) {
        return first.x * second.x + first.y * second.y;
    };
    return Complex;
}());
