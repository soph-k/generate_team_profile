// Links required packages
const fs = require('fs');

const Employee =require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern');


// Creates the ouline for the manager card.
let managerCard = (manager) => {
  return ` 
    <div class="card">
      <div class='card-header'>
        <div class="card-title">${manager.nameMember()}</div>
        <div class="card-text">${manager.roleMember()}</div>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.idMember()}</li>
          <li class="list-group-item"><a href="mailto:${manager.emailMember()}">Email: ${manager.emailMember()}</a></li>
          <li class="list-group-item"><a href="https://github.com/${manager.githubMember()}" target='_blank'>GitHub: ${manager.githubMember()}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeMember()}</li>
        </ul>
      </div>
    </div>`
}

// Creates the ouline for the enginner card.
let engineerCard = (Engineer) => {
  return `
    <div class="card">
      <div class='card-header'>
        <div class="card-title">${Engineer.nameMember()}</div>
        <div class="card-text">${Engineer.roleMember()}</div>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${Engineer.idMember()}</li>
          <li class="list-group-item"><a href="mailto:${Engineer.emailMember()}">Email: ${Engineer.emailMember()}</a></li>
          <li class="list-group-item"><a href="https://github.com/${Engineer.githubMember()}" target='_blank'>GitHub: ${Engineer.githubMember()}</a></li>
        </ul>
      </div>
    </div>`
};

// Creates the ouline for the intern card.
let internCard = (Intern) => {
  return `
    <div class="card">
      <div class='card-header'>
        <div class="card-title">${Intern.nameMember()}</div>
        <div class="card-text">${Intern.roleMember()}</div>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${Intern.idMember()}</li>
          <li class="list-group-item"><a href="mailto:${Intern.emailMember()}">Email: ${Intern.emailMember()}</a></li>
          <li class="list-group-item"><a href="https://github.com/${Intern.githubMember()}" target='_blank'>GitHub: ${Intern.githubMember()}</a></li>
          <li class="list-group-item">School: ${Intern.schoolMember()}</li>
        </ul>
      </div>
    </div>`
}

function roleCards(member) {
  let cards = []
  for(let i = 0; i < member.length; i++) {
    const teamMember = member[i];
    switch(teamMember.roleMember()) {
      case 'Manager':
        const manager = new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.github, teamMember.office);
        cards.push(managerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github);
        cards.push(engineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.github, teamMember.school);
        cards.push(internCard(intern));
        break;
    }
  }
  return cards.join(``)
}



generateHTML = (member) => {
  return `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <link rel="icon" href="./assets/images/favicon.jpg" type="image/x-icon"/>
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Northern Health Tracker</title>
      </head> 
      <body>
        <header class="header-section">
          <div>Team Profile</div>
        </header>  
        <main class="card-container">
          ${roleCards(member)} 
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>`
} 

module.exports = generateHTML;
