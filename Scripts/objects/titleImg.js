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
    var TitleImg = /** @class */ (function (_super) {
        __extends(TitleImg, _super);
        // Private Instance Variables
        // Public Properties
        // Constructors
        function TitleImg(assetManager) {
            var _this = _super.call(this, assetManager.getResult("titleImg")) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        TitleImg.prototype._reset = function () {
        };
        TitleImg.prototype._checkBounds = function () {
        };
        TitleImg.prototype._move = function () {
        };
        // Public Methods
        // Initialization
        TitleImg.prototype.Start = function () {
            this.y = 200;
        };
        // Updates the Object every frame
        TitleImg.prototype.Update = function () {
        };
        return TitleImg;
    }(createjs.Bitmap));
    objects.TitleImg = TitleImg;
})(objects || (objects = {}));
//# sourceMappingURL=titleImg.js.map