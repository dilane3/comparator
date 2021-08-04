class Comparator {
  constructor() {
    // we initialize the default compare function
    this.compare = Comparator.defaultCompareFunction
  }

  // definition of some comparison functions

  /**
   * Default comparison function
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1
  }

  /**
   * checks if two variables are equal.
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0
  }

  /**
   * checks if variable a is less than b.
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) === -1
  }

  /**
   * checks if variable a is greaterThan b.
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) === 1
  }

  /**
   * checks if variable a is less than or equal to b.
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  /**
   * checks if variable a is greater than or equal to b.
   * @param {(number|string)} a
   * @param {(number|string)} b
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}

module.exports = Comparator
