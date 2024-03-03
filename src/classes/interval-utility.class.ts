import Chronometer from "./chronometer.class";

/**
 * Represents a utility for executing a callback function at regular intervals.
 */
class IntervalUtility extends Chronometer {
  private elapsedTimeSinceCallback: number = this.elapsedTime;

  private interval: number;
  private callback: () => void;

  /**
   * Initializes a new instance of the `IntervalUtility` class.
   * @param {number} interval - The interval in milliseconds at which the callback function should be regularly executed.
   * @param {Function} callback - The callback function to execute at each interval.
   */
  constructor(interval: number, callback: () => void) {
    super();

    this.interval = interval;
    this.callback = callback;
  }

  /**
   * Starts the interval utility.
   */
  start = () => {
    this.start();
  };

  /**
   * Stops the interval utility.
   */
  pause = () => {
    this.pause();
  };

  /**
   * Resumes the interval utility
   */
  resume = (): void => {
    this.resume();
  };

  /**
   * Stops the interval utility.
   */
  stop = () => {
    this.clear();
  };

  /**
   * Starts the interval utility and regularly executes the callback function at the specified interval.
   */
  executeIntervalCallback = () => {
    const onTickUpdate = () => {
      const timeSinceCallback = this.elapsedTimeSinceCallback - this.interval;
      if (timeSinceCallback >= 0) {
        this.callback();
        this.elapsedTimeSinceCallback = timeSinceCallback; // Reset elapsed time to simulate the interval
      }
    };

    this.tick(onTickUpdate);
  };

  /**
   * Sets the interval value for the interval utility.
   * @param {number} newInterval - The new interval value in milliseconds.
   * @returns {IntervalUtility} The current instance of the IntervalUtility class.
   */
  setIntervalValue = (newInterval: number): this => {
    this.interval = newInterval;
    return this;
  };
}

export default IntervalUtility;
