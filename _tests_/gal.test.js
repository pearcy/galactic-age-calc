import { AgeInput } from "./../src/galactic.js";

describe ('AgeInput', () => {
  test('input should correctly create a date object with a month, day, year attribute', () => {
    let date = new AgeInput(11, 3, 1980);
    expect(date.month).toEqual(11);
    expect(date.day).toEqual(3);
    expect(date.year).toEqual(1980);
  });
});

describe('ValidateDate', () => {
  test('date input should validate if a valid date is entered', ()=> {
    let date = new AgeInput(5, 3, 1990);
    expect(date.validateDate()).toEqual(true);
  });
});

// describe('CalculateAge', () => {
//   test('should correctly ouput the current date minus the entered date', () => {
//     let date = new AgeInput(4, 17, 1990);
//     expect(date.calculateAge()).toEqual(30);
//   });
// });

describe('determinePlanetAge', () => {
  test('should correctly ouput the age of user from Mars', () => {
    let date = new AgeInput(4, 17, 1990, 1.88);
    expect(date.calculateAge()).toEqual(56);
  });
});





