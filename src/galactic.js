// business logic - export functions

export class AgeInput {
  constructor(month, day, year, planet) {
  this.month = month;
  this.day = day;
  this.year = year;
  this.planet = planet;
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
    console.log(lifeExpectancy);
    let calc = Math.abs(getAge.getUTCFullYear() - 1970);
    // let calc = Math.abs(getAge.getUTCFullYear() - 1970) * this.planet;

    // console.log(calc);

    
    return Math.floor(calc); 
  
  }

}
