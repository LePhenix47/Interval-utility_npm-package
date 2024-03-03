/**
 * Represents a chronometer for tracking elapsed time.
 * Utilizes the `requestAnimationFrame` and `performance` APIs for precise timing.
 */
declare class Chronometer {
    /**
     * The timestamp when the chronometer starts or resumes.
     * @type {number}
     * @private
     */
    private startTime;
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
    private isRunning;
    /**
     * The ID of the animation frame request.
     * @type {number | null}
     * @private
     */
    private animationId;
    /**
     * Initializes a new instance of the `Chronometer` class.
     */
    constructor();
    /**
     * Starts the chronometer.
     */
    start: () => void;
    /**
     * Pauses the chronometer.
     */
    pause: () => void;
    /**
     * Resumes the chronometer.
     */
    resume: () => void;
    /**
     * Restarts the chronometer.
     */
    restart: () => void;
    /**
     * Clears the chronometer.
     */
    clear: () => void;
    /**
     * Retrieves the elapsed time tracked by the chronometer.
     * @returns {number} The elapsed time in milliseconds.
     */
    getElapsedTime: () => number;
    /**
     * Protected method that updates the elapsed time, executes a callback function (if provided),
     * and schedules the next animation frame to continue ticking.
     * @param {Function} [onTickUpdate] - Optional callback function to execute on each tick update.
     * @protected
     */
    protected tick: (onTickUpdate?: (...args: any[]) => any) => void;
}
export default Chronometer;
