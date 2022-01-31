const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets the value", () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  it("clears the value", () => {
    cal.set(3);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add case", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("add should throw an error if value greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract case", () => {
    cal.set(3);
    cal.subtract(2);
    expect(cal.value).toBe(1);
  });

  it("multiply case", () => {
    cal.set(1);
    cal.multiply(4);
    expect(cal.value).toBe(4);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
