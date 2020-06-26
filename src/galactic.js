// business logic - export functions

export class AgeInput {
  constructor(month, day, year, planet, life) {
  this.month = month;
  this.day = day;
  this.year = year;
  this.planet = planet;
  this.life = life;
  }


  calculateAge() {
    let m = String(this.month);
    let d = String(this.day);
    let y = String(this.year);
    let dob = m + '-' + d + '-' + y; 
    let birthday = new Date(dob);
  
    let diff = Date.now() - birthday.getTime();
    let getAge = new Date(diff); 
  
  
