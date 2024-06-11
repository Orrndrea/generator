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
    name: 'github',
  message: 'WHEN I enter my GitHub username',} 
  ,{ type: 'input',
    name: 'licence',
    message: 'What is the licence that you use',
    options: ['MIT', 'BSD 3', 'GPL 3', 'ISC', 'Apache 2.0', 'Unlicense', 'N/A'], } 
 ,{ type: 'input',
   name: 'title',
   message: 'What is the title',}
   ,{ type: 'input',
    name: 'description',
    message: 'What is the description',} 
    ,{ type: 'input',
      name: 'installation',
      message: 'how do you install it',
      default: 'npm i', } 
   ,{ type: 'input',
    name: 'usage',
    message: 'how did you use the appliance',}
   ,{ type: 'input',
    name: 'contribue',
     message: 'how did you contribute',}
     ,{ type: 'input',
      name: 'test',
      message: 'how do  run test',
      default: 'npm test' ,},];
 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
      if (err) {
          console.error('Error generating README:', err);
          return;
      }
      console.log('README generated successfully!!');
  });
} }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
