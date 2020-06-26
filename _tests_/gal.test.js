import { AgeInput } from "./../src/galactic.js";

describe ('AgeInput', () => {
  test('input should correctly create a date object with a month, day, year attribute', () => {
    let date = new AgeInput(11, 3, 1980);
    expect(date.month).toEqual(11);
    expect(date.day).toEqual(3);
    expect(date.year).toEqual(1980);
  });
});

