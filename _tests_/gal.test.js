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

// Tests for Planet Age 

// describe('determinePlanetAge', () => {
//   test('should correctly ouput the age of user from Mars', () => {
//     let date = new AgeInput(4, 17, 1990, 1.88);
//     expect(date.calculateAge()).toEqual(56);
//   });
// });


// describe('determinePlanetAge', () => {
//   test('should correctly ouput the age of user from Mercury', () => {
//     let date = new AgeInput(4, 17, 1990, .24);
//     expect(date.calculateAge()).toEqual(7);
//   });
// });

// describe('determinePlanetAge', () => {
//   test('should correctly ouput the age of user from Venus', () => {
//     let date = new AgeInput(4, 17, 1990, .62);
//     expect(date.calculateAge()).toEqual(18);
//   });
// });

// describe('determinePlanetAge', () => {
//   test('should correctly ouput the age of user from Jupiter', () => {
//     let date = new AgeInput(4, 17, 1990, 11.86);
//     expect(date.calculateAge()).toEqual(355);
//   });
// });


// Tests for to Determine how many years a user has left to live on each planet

describe('CalculateYearsLeft', () => {
  test('should correctly ouput the years left to live if user is from Mercury', () => {
    let date = new AgeInput(4, 17, 1990, .24, 90);
    expect(date.calculateAge()).toEqual(14);
  });
});

describe('CalculateYearsLeft', () => {
  test('should correctly ouput the years left to live if user is from Venus', () => {
    let date = new AgeInput(4, 17, 1990, .62, 90);
    expect(date.calculateAge()).toEqual(37);
  });
});

describe('CalculateYearsLeft', () => {
  test('should correctly ouput the years left to live if user is from Mars', () => {
    let date = new AgeInput(4, 17, 1990, 1.88, 90);
    expect(date.calculateAge()).toEqual(112);
  });
});

describe('CalculateYearsLeft', () => {
  test('should correctly ouput the years left to live if user is from Jupiter', () => {
    let date = new AgeInput(4, 17, 1990, 11.86, 90);
    expect(date.calculateAge()).toEqual(711);
  });
});

// Test to determine number of years they have lived past the life expectancy.

describe('CalculateLifeLeft', () => {
  test('should correctly ouput the years that an alien from Mercury has lived over thier life expectancy', () => {
    let date = new AgeInput(4, 17, 1940, .24, 70);
    expect(date.calculateAge()).toEqual(2);
  });
});

describe('CalculateLifeLeft', () => {
  test('should correctly ouput the years that an alien from Venus has lived over thier life expectancy', () => {
    let date = new AgeInput(4, 17, 1940, .62, 70);
    expect(date.calculateAge()).toEqual(6);
  });
});

describe('CalculateLifeLeft', () => {
  test('should correctly ouput the years that an alien from Mars has lived over thier life expectancy', () => {
    let date = new AgeInput(4, 17, 1940, 1.88, 70);
    expect(date.calculateAge()).toEqual(18);
  });
});







