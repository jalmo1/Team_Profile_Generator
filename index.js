const fs = require("fs");
const generateHtml= require("./dist/generate_HTML")
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const teamArr = []


 const employeeQ =  (data) => {
   
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
    return additionalInfo(name, role, id, email, employeeInfo)
  }else if (role === "Engineer") {
    employeeInfo = "Github"
    return additionalInfo(name, role, id, email, employeeInfo)
  }else if (role === "Intern"){
    employeeInfo = "University"
    return additionalInfo(name, role, id, email, employeeInfo)
  }
})
 }

function additionalInfo(name, role, id, email, employeeInfo){

  inquirer.prompt([
    {
      message: `Enter employees ${ employeeInfo }`,
      name: "employeeInfo"
    },
    {
      type: "confirm",
      name: "add",
      message: "Would you like to add another employee?",
      default: true,
    }
  ]).then((questionLoop) => {
    populateArr(name, role, id, email, questionLoop.employeeInfo)
    if(questionLoop.add === true){
      return employeeQ()
    } else {
      return writeToFile(teamArr)

    }
  })

  function populateArr(name, role, id, email, employeeInfo){
    let addEmployee = ""
    if(role === "Manager"){
      addEmployee = new Manager(name,id, email, employeeInfo)
    } else if (role === "Engineer") {
      addEmployee = new Engineer(name, id, email, employeeInfo)
    } else {
      addEmployee = new Intern(name, id, email, employeeInfo)
    }
    console.log(addEmployee)
    teamArr.push(addEmployee)
    console.log(teamArr)
  }
}

function init(){
  employeeQ()
}

function writeToFile(data) {
  fs.writeFile("index.html", generateHtml(data), (err) => {
    if (err) throw err;
  });
}


init()
