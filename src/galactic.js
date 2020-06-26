// business logic - export functions

export class AgeInput {
  constructor(month, day, year, planet, life) {
  this.month = month;
  this.day = day;
  this.year = year;
  this.planet = planet;
  this.life = life;

  }

  validateDate() {
    if (this.month < 0 || this.month > 11) {
      return false;
    } else if (this.day < 1 || this.day > 31) {
      return false;
    } else if (this.year < 0) {
      return false;
    } else {
      return true;
    }
  }


  calculateAge() {
    let m = String(this.month);
    let d = String(this.day);
    let y = String(this.year);
    let dob = m + '-' + d + '-' + y; 
    let birthday = new Date(dob);
  
    let diff = Date.now() - birthday.getTime();
    let getAge = new Date(diff); 

    let lifeExpectancy = this.planet * this.life;
    let calc = Math.abs(getAge.getUTCFullYear() - 1970) * this.planet;

    
    if (lifeExpectancy < calc) {
      calc = calc - lifeExpectancy;
    } else {
      calc = lifeExpectancy - calc;
    }
    
    return Math.floor(calc); 
  
  }

}
