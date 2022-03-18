
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Use a valid title!");
            }
            return true;
            
        }
    },

    {
        type: 'input',
        message: 'Describe your project',
        name: 'Description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Use a valid description!");
            }
            return true;
            
        }
    },

    {
        type: 'input',
        message: "Describe steps required for installation.",
        name: 'instalation',
    },

    {
        type: 'input',
        message: "Describe usage of this project.",
        name: 'usage',
        default: 'Project Usage',
    },

    {
        type: 'list',
        message: "Choose a license for this project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'none'],
        name: 'license',
    },

    {
        type: 'input',
        message: "Describe any contributors, or how any user can contribute to this project.",
        name: 'contributions'
    },

    {
        type: 'input',
        message: "If applicable provide tests for this project.",
        name: 'tests',
    },

    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'GitHub',
        default: 'hernajor133',
    },

    {
        type: 'input',
        message: "Enter email address.",
        name: 'email',
        default: 'jordihernandez133@gmail.com',
    },
];

function writeReadMe() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            const myMarkdown = markdown(responses.license);
            fs.writeFile('newREADME.md', `# ${responses.title}

## Description
${responses.description}
## Table of Contents
1. [Installation](#installation) 
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation 
${responses.installation}
## Usage 
${responses.usage}
## Contributions 
${responses.contributiions}
## Tests 
${responses.tests}
## Questions
### GitHub
[GitHub](https://www.github.com/${responses.github}) 
### Email
${responses.email}
${myMarkdown}`, function(err) {
    if (err) throw err;
    console.log('README Created!');
})
})
};

writeReadMe();