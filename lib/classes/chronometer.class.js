/**
 * Represents a chronometer for tracking elapsed time.
 * Utilizes the `requestAnimationFrame` and `performance` APIs for precise timing.
 */
var Chronometer = /** @class */ (function () {
    /**
     * Initializes a new instance of the `Chronometer` class.
     */
    function Chronometer() {
        var _this = this;
        /**
         * Starts the chronometer.
         */
        this.start = function () {
            if (!_this.isRunning) {
                _this.isRunning = true;
                _this.startTime = performance.now() - _this.elapsedTime;
                _this.tick();
            }
        };
        /**
         * Pauses the chronometer.
         */
        this.pause = function () {
            if (_this.isRunning) {
                _this.isRunning = false;
                cancelAnimationFrame(_this.animationId);
                _this.elapsedTime = performance.now() - _this.startTime;
            }
        };
        /**
         * Resumes the chronometer.
         */
        this.resume = function () {
            if (!_this.isRunning) {
                _this.isRunning = true;
                _this.startTime = performance.now() - _this.elapsedTime;
                _this.tick();
            }
        };
        /**
         * Restarts the chronometer.
         */
        this.restart = function () {
            _this.elapsedTime = 0;
            _this.start();
        };
        /**
         * Clears the chronometer.
         */
        this.clear = function () {
            _this.elapsedTime = 0;
            _this.isRunning = false;
            cancelAnimationFrame(_this.animationId);
        };
        /**
         * Retrieves the elapsed time tracked by the chronometer.
         * @returns {number} The elapsed time in milliseconds.
         */
        this.getElapsedTime = function () {
            return _this.elapsedTime;
        };
        /**
         * Protected method that updates the elapsed time, executes a callback function (if provided),
         * and schedules the next animation frame to continue ticking.
         * @param {Function} [onTickUpdate] - Optional callback function to execute on each tick update.
         * @protected
         */
        this.tick = function (onTickUpdate) {
            if (!_this.isRunning) {
                return;
            }
            _this.elapsedTime = performance.now() - _this.startTime;
            onTickUpdate === null || onTickUpdate === void 0 ? void 0 : onTickUpdate();
            _this.animationId = requestAnimationFrame(function () {
                _this.tick();
            });
        };
        this.startTime = 0;
        this.elapsedTime = 0;
        this.isRunning = false;
        this.animationId = null;
    }
    return Chronometer;
}());
export default Chronometer;
