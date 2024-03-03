var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Chronometer from "./chronometer.class";
/**
 * Represents a utility for executing a callback function at regular intervals.
 */
var IntervalUtility = /** @class */ (function (_super) {
    __extends(IntervalUtility, _super);
    /**
     * Initializes a new instance of the `IntervalUtility` class.
     * @param {number} interval - The interval in milliseconds at which the callback function should be regularly executed.
     * @param {Function} callback - The callback function to execute at each interval.
     */
    function IntervalUtility(interval, callback) {
        var _this = _super.call(this) || this;
        _this.elapsedTimeSinceCallback = _this.elapsedTime;
        /**
         * Starts the interval utility.
         */
        _this.start = function () {
            _this.start();
        };
        /**
         * Stops the interval utility.
         */
        _this.pause = function () {
            _this.pause();
        };
        /**
         * Resumes the interval utility
         */
        _this.resume = function () {
            _this.resume();
        };
        /**
         * Stops the interval utility.
         */
        _this.stop = function () {
            _this.clear();
        };
        /**
         * Starts the interval utility and regularly executes the callback function at the specified interval.
         */
        _this.executeIntervalCallback = function () {
            var onTickUpdate = function () {
                var timeSinceCallback = _this.elapsedTimeSinceCallback - _this.interval;
                if (timeSinceCallback >= 0) {
                    _this.callback();
                    _this.elapsedTimeSinceCallback = timeSinceCallback; // Reset elapsed time to simulate the interval
                }
            };
            _this.tick(onTickUpdate);
        };
        /**
         * Sets the interval value for the interval utility.
         * @param {number} newInterval - The new interval value in milliseconds.
         * @returns {IntervalUtility} The current instance of the IntervalUtility class.
         */
        _this.setIntervalValue = function (newInterval) {
            _this.interval = newInterval;
            return _this;
        };
        _this.interval = interval;
        _this.callback = callback;
        return _this;
    }
    return IntervalUtility;
}(Chronometer));
export default IntervalUtility;
