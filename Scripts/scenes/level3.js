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
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        // public properties
        // constructor
        function Level3() {
            var _this = _super.call(this) || this;
            console.log("Level3");
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Level3.prototype.Start = function () {
            this._cloudNum = 3;
            // Instantiates a new Array container of Type objects.Cloud
            this._clouds = new Array();
            // Fill the Cloud Array with Clouds
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(3);
            }
            // play background engine sound when the level starts
            this._engineSound = createjs.Sound.play("engineSound");
            this._engineSound.volume = 0.1;
            this._engineSound.loop = -1; // loop forever
            this.Main();
        };
        Level3.prototype.Update = function () {
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
        Level3.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
        };
        Level3.prototype.Reset = function () { };
        Level3.prototype.Main = function () {
            var _this = this;
            // adds ocean to the scene
            this._ocean = new objects.Ocean(3);
            this.addChild(this._ocean);
            this._ocean2 = new objects.Ocean(3, 960);
            this.addChild(this._ocean2);
            // adds island to the scene
            this._island = new objects.Island(3);
            this.addChild(this._island);
            // adds player to the scene
            this._player = new objects.Player(3);
            this.addChild(this._player);
            // adds Each Cloud in the Cloud Array to the Scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add ScoreBoard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map