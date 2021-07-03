const fs = require("fs");
const inquirer = require("inquirer");

// const employeeQ = [
//   {
//     type: "list",
//     name: "role",
//     message: "What type of employee is this?",
//     choices: ["Engineer", "Intern"],
//   },
//   {
//     type: "input",
//     name: "name",
//     messgage: "What is the name of the employee?",
//     validate: (employeeName) => {
//       if (employeeName) {
//         return true;
//       } else {
//         console.log("Please provide employee name.");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Input the employees email?",
//     validate: (employeeEmail) => {
//       if (employeeEmail) {
//         return true;
//       } else {
//         console.log("Please provide the employees email.");
//         return false;
//       }
//     },
//   },
// ];

const managerQ = (data) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      messgage: "What is the name of the employee?",
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
      message: "What is the managers ID?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the managers office number?",
    },
  ]);
};

// function init() {
//   inquirer
//     .prompt(employeeQ)
//     // .then(managerQ)
//     .then(function (userInput) {
//       console.log(userInput);
//       //   writeToFile("README.md", generateMarkdown(userInput));
//     });
// }

// init();
