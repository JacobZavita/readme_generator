const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const axios = require('axios')
const readmeFile = require('./readme.js')

const createReadme = () => {
  prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project. What does it do?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would someone use this?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How should someone contribute to the project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How should someone test the project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'How would you like to license this project?',
      choices: ['Open', 'Closed', 'Whatever']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ])
    .then(readme => {
      readmeFile.create(readme)
      writeFile('generatedreadme.md', readmeFile.get(), err => {
        if (err) { console.log(err) }
        console.log('readme file created!')
      })
    })
    .catch(err => console.log(err))
}

createReadme()