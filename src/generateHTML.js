// Links required packages
const { EFBIG } = require('constants');
const fs = require('fs');

const hmtlHeader = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href=".assets/css/style.css"/>
      <title>Generate Team Profile</title>
    </head>
        
    <body>
      <header class="nav justify-content-center">
        <span class="navbar-brand">Team</span>
      </header>
        
      <main class="container row mx-auto mt-4">
`
const htmlCard = `
      </main>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
  </html>
`

// Creates a HTML card for each team member
hmtlMember = (member) =>{
  member.forEach(employee => {
    const roleMember = employee.roleMember();
    const roleInfo = ``;
      if (employee.roleMember() === 'Manager') {
        return `<h5 class="card-title mb-2"><i class="fa fa-balance-scale"></i> ${roleMember}</h5>`
        `<li class="list-group-item">Office Number: ${employee.office}</li>`
      }
      else if (employee.roleMember() === 'Engineer') {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>`
      }
      else if (employee.roleMember() === 'Intern') {
        return `<h5 class="card-title mb-2"><i class="fas fa-university"></i> ${roleMember}</h5>`
         `<li class="list-group-item">School: ${employee.school}</li>`
      }else{}
    
  

        let card = `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">${employee.name}</div>
                        <div class="card-body">
                            ${roleMember}
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                ${roleInfo}
                            </ul>
                        </div>
                </div>
        `
        hmtlHeader = hmtlHeader.concat(card);
    });

    const completedHTML = hmtlHeader.concat(htmlCard);

    writeToFile(completedHTML);
}

// Creates an index.html file
function writeToFile(completedHTML) {
    fs.writeFile('./dist/index.html', completedHTML, err => {
        err ? console.log("error") : console.log("Generated index.html");
    })
};

module.exports = hmtlMember;