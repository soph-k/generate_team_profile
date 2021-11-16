///////////////////////// Require Files /////////////////////////
const Employee = require('./Employee');

// const that = this;


///////////////////////// Subclass /////////////////////////
class Intern extends Employee {
  constructor(name, id, email, github, school) {
    super(name, id, email, github)
    this.school = school; 
  }
  // Only for this subclass
  schoolMember() {
    return this.school;
  }
  // Overides main class
  roleMember() {
    return "Intern"
  }
}

module.exports = Intern;
