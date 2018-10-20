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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // public properties
        // constructors
        function Player(level) {
            if (level === void 0) { level = 1; }
            var _this = _super.call(this, "plane") || this;
            _this._level = level;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            switch (this._level) {
                case 1:
                    this.y = 435;
                    break;
                case 2:
                    this.x = 45;
                    this.rotation = 90;
                    break;
                case 3:
                    this.x = 595;
                    this.rotation = -90;
                    break;
            }
        };
        Player.prototype.Update = function () {
            if (this._level == 1) {
                this.x = managers.Game.stage.mouseX;
            }
            else {
                this.y = managers.Game.stage.mouseY;
            }
            this._updatePosition();
            // checks the right boundary
            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            // check the left boundary
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
            // check the bottom boundary
            if (this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }
            // check the top boundary
            if (this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map