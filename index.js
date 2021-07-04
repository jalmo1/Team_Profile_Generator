const fs = require("fs");
const inquirer = require("inquirer");
const teamArr = []

function init(){
  employeeQ()
}

 const employeeQ =  () => [
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?",
    validate: (employeeName) => {
      if (employeeName) {
        return true;
      } else {
        console.log("Please provide employee name.");
        return false;
      }
  },
},
  {
    type: "list",
    name: "role",
    message: "What type of employee is this?",
    choices: ["Manager", "Engineer", "Intern"],
  },
  
  {
    type: "input",
    name: "email",
    message: "Input the employees email?",
    validate: (employeeEmail) => {
      if (employeeEmail) {
        return true;
      } else {
        console.log("Please provide the employees email.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the employees ID?",
  },
]).then(function({name, role, email, id}) {
  let employeeInfo = ""
  if (role === "Manager"){
    employeeInfo = " Office number"
  }else if (role === "Engineer") {
    employeeInfo = "Github"
  }else if (role === "Intern"){
    employeeInfo = "University"
  }

  inquirer.prompt({
    message: `Enter employees ${ employeeInfo }`,
    name: "employeeInfo"
  })
})
]

init()
