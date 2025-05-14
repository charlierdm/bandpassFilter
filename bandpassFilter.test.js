import { bandpassFilter } from "./bandpassFilter";

describe("bandpassFilter", () => {
  it("throws an error if the input track array is empty", () => {
    expect(() => {
      bandpassFilter([]);
    }).toThrow("input track is empty");
  });

  it("throws an error if the input track is falsy", () => {
    expect(() => {
      bandpassFilter([null]);
    }).toThrow("input is corrupted");
  });

  it("throws an error if the lower limit is greater than the upper limit", () => {
    expect(() => {
      bandpassFilter([10], 40, 20);
    }).toThrow("lower limit must be less than or equal to the upper value.");
  });

  it("should filter to [30] when the lower and upper limits are 30, 40 ", () => {
    expect(bandpassFilter([20], 30, 40)).toEqual([30]);
  });

  it("should filter to [20, 50] when the lower and upper limits are  20, 60 ", () => {
    expect(bandpassFilter([10, 50], 20, 60)).toEqual([20, 50]);
  });

  it("should filter to [100, 200, 100] when the lower and upper limits are 150, 180", () => {
    expect(bandpassFilter([100, 200, 100], 150, 180)).toEqual([
      150, 180, 150,
    ]);
  });

  it("should filter to [25, 30, 40, 45, 45] when the lower and upper limits are  25, 45 ", () => {
    expect(bandpassFilter([20, 30, 40, 50, 60], 25, 45)).toEqual([
      25, 30, 40, 45, 45,
    ]);
  });

  it("should filter to [500, 700, 600] when the lower and upper limits are 500, 700", () => {
    expect(bandpassFilter([400, 900, 600], 500, 700)).toEqual([500, 700, 600]);
  });

  it("should filter to [1000, 500, 1100]  when the lower and upper limits are 400, 1100", () => {
    expect(bandpassFilter([1000, 500, 1200], 400, 1100)).toEqual([
      1000, 500, 1100,
    ]);
  });
});
