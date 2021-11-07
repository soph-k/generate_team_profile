///////////////////////// Require Files /////////////////////////
const Employee = require('./Employee');

///////////////////////// Subclass /////////////////////////
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
  }
  // Overides main class
  roleMember() {
    return "Engineer";
  }
}

module.exports = Engineer;
