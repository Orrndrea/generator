// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },{ type: 'input',
  username: 'github',
  message: 'WHEN I enter my GitHub username',} ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
