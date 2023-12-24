const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  test("should return uppercased World", () => {
    const result = capitalize("world");
    expect(result).toBe("World");
  });

  test("should return empty string for empty input", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  test("should return the same string if already capitalized", () => {
    const result = capitalize("Capitalized");
    expect(result).toBe("Capitalized");
  });
});

// @ FilterOddNumber
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });

  it("should return [2, 4, 6]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it("should return an empty array for an empty input", () => {
    expect(filterOddNumber([])).toEqual([]);
  });
});

// @ EpochDateToUTC
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should return the current date for the current timestamp", () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const result = epochDateToUTC(currentTimestamp);
    const currentDate = new Date(currentTimestamp * 1000).toUTCString();
    expect(result).toBe(currentDate);
  });

  it("should handle negative timestamps", () => {
    const result = epochDateToUTC(-86400);
    expect(result).toBe("Wed, 31 Dec 1969 00:00:00 GMT");
  });

  test("should return Invalid Date for an invalid timestamp", () => {
    const result = epochDateToUTC("invalid");
    expect(result).toBe("Invalid Date");
  });
});
