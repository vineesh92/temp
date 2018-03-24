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
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // Private Instance Variables
        // Public Properties
        // Constructors
        function Island(assetManager) {
            var _this = _super.call(this, assetManager, "island") || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initialization
        Island.prototype.Reset = function () {
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
            this.y = -this.height;
        };
        Island.prototype.CheckBounds = function () {
            // check the bottom border
            if (this.y >= 600 + this.height) {
                this.Reset();
            }
        };
        Island.prototype.Move = function () {
            this.y += this._dy;
        };
        Island.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // Updates the Object every frame
        Island.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map