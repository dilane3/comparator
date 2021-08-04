const Comparator = require("./Comparator.js")

// comparison suite test
describe("Comparator", () => {
  // test on numbers variables
  it("Should perform comparison operation on numbers", () => {
    const compare = new Comparator()
    const a = 10
    const b = 5
    const c = 10

    // equal comparison
    expect(compare.equal(a, b)).toBe(false)

    // less comparison
    expect(compare.lessThan(a, b)).toBe(false)

    // greater comparison
    expect(compare.greaterThan(a, b)).toBe(true)

    // greater or equal comparison
    expect(compare.greaterThanOrEqual(a, c)).toBe(true)

    // less or equal comparison
    expect(compare.lessThanOrEqual(b, c)).toBe(true)
  })

  // test on strings variables
  it("Should perform equality comparison on strings", () => {
    const compare = new Comparator()
    const str1 = "hello"
    const str2 = "hello"
    const str3 = "hi"

    // equal comparison
    expect(compare.equal(str1, str2)).toBe(true)
    expect(compare.equal(str1, str3)).toBe(false)
  })
})
