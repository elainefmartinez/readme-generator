// TODO: Include packages needed for this application
const inquirer = require('inquirer');


const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'project title',
    },
    {
        type: 'input',
        message: 'Enter project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents?',
        name: 'Table of Contents',
    },
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Project Usage?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'License?',
        name: 'License',
        choices:['MIT','GPLv2','Apache 2.0'],
        

    },
    {
        type: 'input',
        message: 'Contributions?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Test?',
        name: 'Tests',
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
    return inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((error) =>{
        console.log(error)
    })
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();*/
