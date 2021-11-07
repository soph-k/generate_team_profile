///////////////////////// Require Files /////////////////////////
const Employee = require('./Employee');

///////////////////////// Subclass /////////////////////////
class Manager extends Employee {
  constructor (name, id, email, github, office) { 
    super(name, id, email, github, office);
    this.office = office;
  }
  // Only for this subclass
  officeMember(){
    return this.office;
  }
  // Overides main class
  roleMember() {
    return "Manager";
  }
}

module.exports = Manager;