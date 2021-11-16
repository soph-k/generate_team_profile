///////////////// Require NodeJS Packages & Files //////////////
// Inquirer npm require
const fs = require('fs');
const inquirer = require('inquirer');

// Other file require
const Employee =require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');

// Send results to HTML page
const generateHTML = require('./src/generateHTML');

// Creates an array for members
const teamMembers = [];


///////////////////////// Questions /////////////////////////
// Questions for the manager role
managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Insert name: ',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Insert manager ID: ',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Insert work email: ',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Insert GitHub username: ',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Insert manager office number: ',
        name: 'office',
      },

    ])
    .then((response) => {
      // Saves users options for the manager role
      const manager = new Manager(response.name, response.id, response.email, response.github, response.office);
      // Adds the user's options in an empty array
      teamMembers.push(manager);
      // Allows more team members to be added
      addMembers();
  });
};

// Questions for the manager role
engineerQuestion = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Insert name: ',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Insert Engineer ID: ',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Insert work email: ',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Insert GitHub username: ',
        name: 'github',
      }
    ])
    .then((response) => {
      // Saves users options for the engineering role
      const engineer = new Engineer(response.name, response.id, response.email, response.github)
      // Adds the user's options in an empty array
      teamMembers.push(engineer)
      // Allows more team members to be added
      addMembers ();
  })
};

// Questions for the manager role
internQuestion = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Insert name: ',
        name: 'name'
      },
      {
        type: 'input',
        message: 'Insert intern ID: ',
        name: 'id'
      },
      {
        type: 'input',
        message: 'Insert email: ',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Insert GitHub username: ',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter intern attended school: ',
        name: 'school'  
      },
    ])
    .then((response) => {
      // Saves users options for the engineering role
      const intern = new Intern(response.name, response.id, response.email, response.github, response.school)
      // Adds the user's options in an empty array
      teamMembers.push(intern);
      // Allows more team members to be added
      addMembers();
  })
}

// Add more members or create the HTML page
addMembers = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Insert more team members?',
        name: 'member',
        choices: ['Engineer', 'Intern', 'No'],
      }
    ])
    .then(response => {
      // Ask engineer question
      if (response.member === "Engineer"){
        engineerQuestion(response);
      }
      // Ask intern question
      else if (response.member === "Intern"){
        internQuestion(response);
      }
      // create the HTML page
      else {
        createHTML ();
      }
  })
}

// Creates an index.html file
createHTML = () => {
  fs.writeFile('./dist/index.html', generateHTML(teamMembers), err => {
    err ? console.log("error") : console.log("Generated index.html");
  })
};


///////////////////////// Start /////////////////////////
// Starts the first question
managerQuestions();
