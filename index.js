/**
 * Utility classs that sets and clears intervals
 */
class Interval {
  constructor() {
    this.id = "";
    this.arrayOfIds = [];
  }

  /**
   * Methods that creates an interval
   *
   * @param callback Callback function that will be called after the timer runs out
   * @param milliseconds Duration of the timer in milliseconds before executing the callback function
   * @returns A number as an ID for the interval
   *
   *
   *```js
   * const intervalCreator = new interval();
   *
   * let fct = ()=>{
   *  console.log("Hello World")
   * };
   *
   * let intervalTrigger = intervalCreator.addinterval(fct, 2_500);
   *
   *
   * ```
   */
  addInterval(callback, milliseconds) {
    this.id = setInterval(() => {
      callback();
    }, milliseconds);
    this.arrayOfIds.push(this.id);
    return this.id;
  }

  /**
   * Method that removes an interval
   *
   * @param id ID of the interval to remove (stored inside the trigger of the interval)
   *
   * ex:
   *
   * ```js
   *
   * const intervalCreator = new Interval();
   *
   * function fct(){
   *   console.log("Hello world!");
   * }
   *
   * let intervalTrigger = intervalCreator.addInterval(fct, 2_500);
   *
   * //...
   *
   * intervalCreator.removeInterval(intervalTrigger);
   *
   * ```
   */
  removeInterval(id) {
    const actualId = this.arrayOfIds.filter((idNumber) => {
      return idNumber === id;
    })[0];

    clearInterval(actualId);
    this.arrayOfIds = this.arrayOfIds.filter((idNumber) => {
      return idNumber !== actualId;
    });
  }
}

module.exports = Interval;
