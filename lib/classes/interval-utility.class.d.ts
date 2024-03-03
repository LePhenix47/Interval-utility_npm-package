import Chronometer from "./chronometer.class";
/**
 * Represents a utility for executing a callback function at regular intervals.
 */
declare class IntervalUtility extends Chronometer {
    private elapsedTimeSinceCallback;
    private interval;
    private callback;
    /**
     * Initializes a new instance of the `IntervalUtility` class.
     * @param {number} interval - The interval in milliseconds at which the callback function should be regularly executed.
     * @param {Function} callback - The callback function to execute at each interval.
     */
    constructor(interval: number, callback: () => void);
    /**
     * Starts the interval utility.
     */
    start: () => void;
    /**
     * Stops the interval utility.
     */
    pause: () => void;
    /**
     * Resumes the interval utility
     */
    resume: () => void;
    /**
     * Stops the interval utility.
     */
    stop: () => void;
    /**
     * Starts the interval utility and regularly executes the callback function at the specified interval.
     */
    executeIntervalCallback: () => void;
    /**
     * Sets the interval value for the interval utility.
     * @param {number} newInterval - The new interval value in milliseconds.
     * @returns {IntervalUtility} The current instance of the IntervalUtility class.
     */
    setIntervalValue: (newInterval: number) => this;
}
export default IntervalUtility;
