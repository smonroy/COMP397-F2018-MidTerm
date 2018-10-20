var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // constructor
        function Ocean(level) {
            if (level === void 0) { level = 1; }
            var _this = _super.call(this, "ocean") || this;
            _this._level = level;
            switch (_this._level) {
                case 2:
                case 3:
                    _this.rotation = -90;
                    break;
            }
            _this.Start();
            return _this;
        }
        // private methods
        Ocean.prototype._checkBounds = function () {
            switch (this._level) {
                case 1:
                    if (this.y >= 0) {
                        this.Reset();
                    }
                    break;
                case 2:
                    if (this.x <= -800) {
                        this.Reset();
                    }
                    break;
                case 3:
                    if (this.x >= 0) {
                        this.Reset();
                    }
                    break;
            }
        };
        Ocean.prototype._move = function () {
            switch (this._level) {
                case 1:
                    this.y += this.speed;
                    break;
                case 2:
                    this.x -= this.speed;
                    break;
                case 3:
                    this.x += this.speed;
                    break;
            }
        };
        // public methods
        Ocean.prototype.Reset = function () {
            switch (this._level) {
                case 1:
                    this.y = -960;
                    break;
                case 2:
                    this.x = 0;
                    this.y = 480;
                    break;
                case 3:
                    this.x = -800;
                    this.y = 480;
                    break;
            }
        };
        Ocean.prototype.Start = function () {
            this.Reset();
            this.speed = 5; // 5 px per frame
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Ocean.prototype.Destroy = function () {
        };
        return Ocean;
    }(objects.GameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map