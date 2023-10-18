// Packages for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// License Array
const licenseArr = [
    'None',
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
]

// Badges Array
const badgesArr = [
    'None',
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
]

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter project title."
            : true
        }
    },
    {
        type: 'list',
        message: 'Add a license?',
        choices: licenseArr,
        name: 'license',
    },
    {
        type: 'list',
        message: 'Do you want to add a link to live deploy?',
        choices: ['Yes', 'No', 'Placeholder (add later)'],
        name: 'liveLink',
    },
    {
        type: 'input',
        message: 'Enter Url for Live Deploy:',
        name: 'liveLinkUrl',
        when: (data) => data.liveLink === 'Yes',
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter url."
            : true
        },
    },
    {
        type: 'input',
        message: 'Project Description:',
        name: 'description',
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter project description."
            : true
        },
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter steps required."
            : true
        },
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
        type: 'input',
        message: 'Enter their GitHub Username(s):',
        name: 'addCollaborators',
        when: (data) => data.credit === true,
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter at least one username."
            : true
        },
    },
    {
        type: 'checkbox',
        message: 'Choose your Badges:',
        choices: badgesArr,
        name: 'badges',
        validate: (selected) => {
            return (selected.includes('None') && selected.length > 1)
                ? "You selected 'None' & another badge, please select one or the other."
                : true
        },
    },
    {
        type: 'input',
        message: 'List Features:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'List Test Examples:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter your username."
            : true
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: (input) => {
            return (input.trim() === '')
            ? "Please enter email address."
            : true
        }
    },
]

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README file generated successfully.')
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
