/**
 * Represents a chronometer for tracking elapsed time.
 * Utilizes the `requestAnimationFrame` and `performance` APIs for precise timing.
 */
class Chronometer {
  /**
   * The timestamp when the chronometer starts or resumes.
   * @type {number}
   * @private
   */
  private startTime: number;

  /**
   * The total elapsed time tracked by the chronometer.
   * @type {number}
   * @public
   */
  protected elapsedTime: number;

  /**
   * A flag indicating whether the chronometer is currently running.
   * @type {boolean}
   * @private
   */
  private isRunning: boolean;

  /**
   * The ID of the animation frame request.
   * @type {number | null}
   * @private
   */
  private animationId: number | null;

  /**
   * Initializes a new instance of the `Chronometer` class.
   */
  constructor() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
    this.animationId = null;
  }

  /**
   * Starts the chronometer.
   */
  start = () => {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = performance.now() - this.elapsedTime;
      this.tick();
    }
  };

  /**
   * Pauses the chronometer.
   */
  pause = () => {
    if (this.isRunning) {
      this.isRunning = false;
      cancelAnimationFrame(this.animationId!);
      this.elapsedTime = performance.now() - this.startTime;
    }
  };

  /**
   * Resumes the chronometer.
   */
  resume = () => {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = performance.now() - this.elapsedTime;
      this.tick();
    }
  };

  /**
   * Restarts the chronometer.
   */
  restart = () => {
    this.elapsedTime = 0;
    this.start();
  };

  /**
   * Clears the chronometer.
   */
  clear = () => {
    this.elapsedTime = 0;
    this.isRunning = false;
    cancelAnimationFrame(this.animationId!);
  };

  /**
   * Retrieves the elapsed time tracked by the chronometer.
   * @returns {number} The elapsed time in milliseconds.
   */
  getElapsedTime = (): number => {
    return this.elapsedTime;
  };

  /**
   * Protected method that updates the elapsed time, executes a callback function (if provided),
   * and schedules the next animation frame to continue ticking.
   * @param {Function} [onTickUpdate] - Optional callback function to execute on each tick update.
   * @protected
   */

  protected tick = (onTickUpdate?: (...args: any[]) => any): void => {
    if (!this.isRunning) {
      return;
    }

    this.elapsedTime = performance.now() - this.startTime;
    onTickUpdate?.();
    this.animationId = requestAnimationFrame(() => {
      this.tick();
    });
  };
}

export default Chronometer;
