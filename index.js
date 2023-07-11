// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'title',
    },
   {
        type: 'input',
        message: 'Enter project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents?',
        name: 'table of contents',
    },
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Project Usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices:['MIT','GPLv2','Apache 2.0'],
        

    },
    {
        type: 'input',
        message: 'Contributions?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Test?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'For questions(email)?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'For questions(github)?',
        name: 'github',
    }

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("Successful!")
    });
}

// TODO: Create a function to initialize app
function init() {
    //prompt the questions
    inquirer
        .prompt(questions)
        .then(function (input) {
            writeToFile("README.md", generateMarkdown(input));
            //return data
        });
        
    //store input
    //use data to create new file
};

// Function call to initialize app
init();
