///////////////////////// Main Class /////////////////////////
class Employee {
  constructor (name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  nameMember() {
    return this.name;  
  }
  idMember() {
    return this.id;
  } 
  emailMember() {
    return this.email;
  }
  githubMember() {
    return this.github;
  }
  roleMember() {
    return "Employee";
  }
}

module.exports = Employee;
