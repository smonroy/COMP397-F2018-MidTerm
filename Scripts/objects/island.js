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
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // public properties
        // constructor
        function Island(level) {
            if (level === void 0) { level = 1; }
            var _this = _super.call(this, "island") || this;
            _this._level = level;
            _this.Start();
            return _this;
        }
        // private methods
        Island.prototype._move = function () {
            switch (this._level) {
                case 1:
                    this.y += this._speed;
                    break;
                case 2:
                    this.x -= this._speed;
                    break;
                case 3:
                    this.x += this._speed;
                    break;
            }
            this._updatePosition();
        };
        Island.prototype._checkBounds = function () {
            switch (this._level) {
                case 1:
                    if (this.y > 480 + this.Height) {
                        this.Reset();
                    }
                    break;
                case 2:
                    if (this.x < 0 - this.Width) {
                        this.Reset();
                    }
                    break;
                case 3:
                    if (this.x > 640 + this.Width) {
                        this.Reset();
                    }
                    break;
            }
        };
        // public methods
        Island.prototype.Reset = function () {
            this._speed = 5;
            switch (this._level) {
                case 1:
                    this.y = -this.Height;
                    this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
                    break;
                case 2:
                    this.x = 640 + this.Width;
                    this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                    break;
                case 3:
                    this.x = -this.Width;
                    this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                    break;
            }
            this.IsColliding = false;
        };
        Island.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Island.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Island.prototype.Destroy = function () {
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map