// Packages for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// License Array
const licenseArr = [
    'Apache',
    'GNU General Public',
    'MIT',
    'BSD 2-Clause "Simplified"',
    'BSD 3-Clause "New" or "Revised"',
    'Boost Software',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public 1.0',
    'GNU Affero General Public v3.0',
    'Mozilla Public 2.0',
    'The Unlicense',
    'None',]

// Badges Array
const badgesArr = [
    'GIT',
    'GitHub',
    'GitHub Actions',
    'GitHub Pages',
    'JavaScript',
    'MySQL',
    'Bootstrap',
    'jQuery',
    'Node.JS',
    'Express.js',
    'None',
]

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'list',
        message: 'Add a license?',
        choices: licenseArr,
        name: 'license',
    },
    {
        type: 'confirm',
        message: 'Do you want to add a placeholder for the link to live deploy?',
        name: 'placeholderLiveLink',
    },
    {
        type: 'input',
        message: 'Please write a brief project description.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'confirm',
        message: 'Do you want to add a placeholder reminder for a screenshot?',
        name: 'screenshot',
    },
    {
        type: 'confirm',
        message: 'Any collaborators?',
        name: 'credit',
    },
    {
        type: 'checkbox',
        message: 'Choose your badges:',
        choices: badgesArr,
        name: 'badges',
    },
    {
        type: 'input',
        message: 'List features:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'List test examples:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
]

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README file genertated successfully.')
    })
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {

        const readmeContent = generateMarkdown.generateMarkdown(data)

        const fileName = 'README.md'

        writeToFile(fileName, readmeContent)
    })
}

// Function call to initialize app
init()
