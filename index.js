// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Project Title:",
    },
    {
      type: "input",
      name: "description",
      message: "A short description of your project:",
    },
    {
      type: "input",
      name: "instructions",
      message: "Please cover any installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this app used for?",
    },
    {
      type: "input",
      name: "contribute",
      message: "Contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Select a license: ",
      choices: ["MIT", "Mozilla Public License 2.0", "Apache 2.0", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "Your Github username:",
    },
    {
      type: "input",
      name: "githubUrl",
      message: "Your Github URL:",
    },
    {
      type: "input",
      name: "email",
      message: "Your email address:",
    },
  ])
  .then((response) => {
    const newFile = generateMarkdown(response);
    // TODO: Create a function to write README file
    fs.writeFile("newREADME.md", newFile, (err) => {
      err ? console.error(err) : console.log("newREADME.md generated!");
    });
  });
