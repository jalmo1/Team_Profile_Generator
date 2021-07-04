const employeeData = require("../index")
const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")

// TODO: Create a function to generate markdown for README
function generateHtml(data) {
    // generateHeader()
    //employeeCard()
    // htmlEnd()
    // append(htmlEnd())
    return `
        ${generateHeader()}
        ${employeeCard(data)}

        ${htmlEnd()}
    `
  }
  
function generateHeader(){
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./src/styles.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <title>Team profile Generator</title>
      </head>
      <body>
    <div>
      <header>
        <nav class="navbar navbar-light bg-light" style="margin-bottom: 50px">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team!</span>
          </div>
        </nav>
      </header>
      <div class="container">
    <div class="row">
    `
}

function employeeCard(data){
        let employees = ``
        // data.getName()
        // data.getEmail()
        // data.getId()
        for(var i = 0; i < data.length; i++) 
        if (data[i].getRole() === "Manager"){
            employees += ` 
            <div class="card text-center text-dark bg-info mb-4" style="max-width: 18rem">
              <div class="card-header"><h3>${data[i].getName()}</h3></div>
              <div class="card-body">
                <h5 class="card-title">
                  <img src="./icons/meh.svg" alt="meh face" /> Manager
                </h5>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item id-num">Id Number: ${data[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li class="list-group-item"><img src="./icons/door-open.svg" alt="house logo" /> Office number: ${data[i].getOffice()}</li>
                  </ul>
                </div>
              </div>
            </div>
         
            `
        } else if(data[i].getRole() === "Engineer") {
            employees += ` 
            <div class="card text-center text-dark bg-info mb-4" style="max-width: 18rem">
              <div class="card-header"><h3>${data[i].getName()}</h3></div>
              <div class="card-body">
                <h5 class="card-title">
                  <img src="./icons/monitor.svg" alt="monitor icon" /> Engineer
                </h5>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item id-num">Id Number: ${data[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li class="list-group-item"> <img src="./icons/github.svg" alt="github logo" />
                    Github: <a href="https://www.github.com/${data[i].getGithub()}" target="_blank">${data[i].getGithub()}</a></li>
                  </ul>
                </div>
              </div>
            </div>
         
            `
        } else if (data[i].getRole() === "Intern") {
            employees += ` 
            <div class="card text-center text-dark bg-info mb-4" style="max-width: 18rem">
              <div class="card-header"><h3>${data[i].getName()}</h3></div>
              <div class="card-body">
                <h5 class="card-title">
                <img src="./icons/bank.svg" alt="meh face" /> Intern
                </h5>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item id-num">Id Number: ${data[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li class="list-group-item"><img src="./icons/keyboard-fill.svg" alt="github logo" />School: ${data[i].getSchool()}</li>
                  </ul>
                </div>
              </div>
            </div>
          
            ` 
        }   
    return employees
}

function htmlEnd(){
    return `
    </div>
</body>
</html>`
}

  module.exports = generateHtml;