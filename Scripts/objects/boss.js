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
var objects;
(function (objects) {
    var Boss1 = /** @class */ (function (_super) {
        __extends(Boss1, _super);
        // Private Instance Variables
        // Public Properties
        // Constructors
        function Boss1(assetManager, name) {
            var _this = _super.call(this, assetManager, name) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initialization
        Boss1.prototype.Reset = function () {
            this.x = 400;
        };
        Boss1.prototype.CheckBounds = function () {
            // check the bottom border
            if (this.y >= 0 - this.height) {
                this.Reset();
            }
        };
        Boss1.prototype.Move = function () {
            this.y += this._dy;
        };
        Boss1.prototype.Start = function () {
            this._dy = 5;
            this.x = 1000;
            this.y = -this.height - 20;
        };
        // Updates the Object every frame
        Boss1.prototype.Update = function () {
            if (this.y < 120) {
                this.Move();
            }
            this.CheckBounds();
        };
        return Boss1;
    }(objects.GameObject));
    objects.Boss1 = Boss1;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map