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
var scenes;
(function (scenes) {
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        // public properties
        // constructor
        function Level2() {
            var _this = _super.call(this) || this;
            console.log("Level2");
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Level2.prototype.Start = function () {
            this._cloudNum = 2;
            // Instantiates a new Array container of Type objects.Cloud
            this._clouds = new Array();
            // Fill the Cloud Array with Clouds
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(2);
            }
            // play background engine sound when the level starts
            this._engineSound = createjs.Sound.play("engineSound");
            this._engineSound.volume = 0.1;
            this._engineSound.loop = -1; // loop forever
            this.Main();
        };
        Level2.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._ocean2.Update();
            this._player.Update();
            this._island.Update();
            // check if player and island are colliding
            managers.Collision.Check(this._player, this._island);
            // Update Each cloud in the Cloud Array
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.Check(_this._player, cloud);
            });
        };
        Level2.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
        };
        Level2.prototype.Reset = function () { };
        Level2.prototype.Main = function () {
            var _this = this;
            // adds ocean to the scene
            this._ocean = new objects.Ocean(2);
            this.addChild(this._ocean);
            this._ocean2 = new objects.Ocean(2, 960);
            this.addChild(this._ocean2);
            // adds island to the scene
            this._island = new objects.Island(2);
            this.addChild(this._island);
            // adds player to the scene
            this._player = new objects.Player(2);
            this.addChild(this._player);
            // adds Each Cloud in the Cloud Array to the Scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add ScoreBoard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map