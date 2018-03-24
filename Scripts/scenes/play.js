var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Public Properties
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        //when player shoots
        PlayScene.prototype._Shoot = function () {
            if (this._planeBulletsCount == 50) {
                this._planeBulletsCount = 0;
            }
            this._planeBullets[this._planeBulletsCount].SetXY(this._plane.x, this._plane.y - 30);
            this._planeBulletsCount++;
            this._planeShotSound = createjs.Sound.play("planeShot");
            this._planeShotSound.volume = 0.1;
        };
        // Public Methods
        // Initialize Game Variables and objects
        PlayScene.prototype.Start = function () {
            // setup background sound
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1;
            this._engineSound.volume = 0.3;
            this._planeBulletsNum = 50;
            this._planeBulletsCount = 0;
            this._bossHealth = 10;
            this._fireBackground = new objects.FireBackground(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this._dragonsNumber = 5;
            this, this._dragons = new Array();
            for (var i = 0; i < this._dragonsNumber; i++) {
                this._dragons[i] = new objects.Dragon(this.assetManager, Math.random() * 250);
            }
            this._boss1 = new objects.Boss1(this.assetManager, "boss1");
            this._planeBullets = new Array();
            for (var i = 0; i < this._planeBulletsNum; i++) {
                this._planeBullets[i] = new objects.PlaneBullets(this.assetManager);
            }
            this._scoreBoard = new managers.ScoreBoard();
            objects.Game.scoreBoardManager = this._scoreBoard;
            this._bossKilled = false;
            this._dragonsKilled = 0;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            if (this._dragonsKilled < 20) {
                this._fireBackground.Update();
            }
            this._plane.Update();
            // check collision between plane and dragon
            this._dragons.forEach(function (dragon) {
                dragon.Update();
                if (managers.Collision.Check(dragon, _this._plane)) {
                    dragon.x = 1200;
                }
                if (_this._dragonsKilled >= 20) {
                    dragon.StopSpawn();
                }
                if (dragon.y > 850 && _this._dragonsKilled >= 20) {
                    //console.log('boss time')
                    _this._boss1.Update();
                }
            });
            //update each planebullet and check collision with boss
            this._planeBullets.forEach(function (bullet) {
                bullet.Update();
                if (managers.Collision.Check(bullet, _this._boss1)) {
                    _this._bossHealth--;
                    if (_this._bossHealth == 0) {
                        _this._boss1.x = 1800;
                        _this.removeChild(_this._boss1);
                        _this._bossKilled = true;
                    }
                    bullet.x = 900;
                }
            });
            //check collission bullets with each small dragon
            for (var i = 0; i < this._planeBullets.length; i++) {
                for (var j = 0; j < this._dragons.length; j++) {
                    if (managers.Collision.Check(this._planeBullets[i], this._dragons[j])) {
                        //move dragon and bullet out of canvas
                        this._planeBullets[i].x = -900;
                        this._dragons[j].x = 900;
                        this._dragonsKilled++;
                    }
                }
            }
            //objects.Game.currentScene = config.Scene.OVER;
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                objects.Game.currentScene = config.Scene.OVER;
            }
            if (this._bossKilled == true) {
                this._engineSound.stop();
                objects.Game.currentScene = config.Scene.PLAY2;
            }
            //press  space to shoot
            //if(objects.Game.keyboardManager.shoot) {
            //  this._Shoot();
            //}
        };
        // This is where the fun happens
        PlayScene.prototype.Main = function () {
            var _this = this;
            // add fireBackground to the scene
            this.addChild(this._fireBackground);
            // add dragons to this scene
            this._dragons.forEach(function (dragon) {
                _this.addChild(dragon);
            });
            // add plane to this scene
            this.addChild(this._plane);
            this.addChild(this._boss1);
            // add the Lives Label
            this.addChild(this._scoreBoard.LivesLabel);
            // add the Score Label
            this.addChild(this._scoreBoard.ScoreLabel);
            this._planeBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.on("click", this._Shoot);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map