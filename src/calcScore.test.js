import {calcRelativeValue} from "./calcScore";

it('Calculate relative value', () => {
  expect(calcRelativeValue([1, 4], "min", 1)).toEqual(1);
  expect(calcRelativeValue([1, 4], "max", 4)).toEqual(1);

  expect(calcRelativeValue([1, 4], "min", 2)).toEqual(0.5);
  expect(calcRelativeValue([1, 4], "max", 2)).toEqual(0.5);

  expect(calcRelativeValue([1, 10], "max", 1)).toEqual(0.1);
  expect(calcRelativeValue([1, 10], "min", 10)).toEqual(0.1);
});
