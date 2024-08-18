// Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['MIT', 'BSD 3', 'GPL 3', 'ISC', 'Apache 2.0', 'Unlicense', 'N/A'],
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you run tests?',
    default: 'npm test',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
    if (err) {
      console.error('Error generating README:', err);
      return;
    }
    console.log('README generated successfully!');
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Creating README...');
    const title = inquirerResponses.title;
    writeToFile(`${title}.md`, generateMarkdown({ ...inquirerResponses, title }));
  });
}

// Function call to initialize app
init();
