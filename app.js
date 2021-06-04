const { prompt } = require('inquirer')
const { writeFile } = require('fs')
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
      message: 'How do you install the project? What dependencies are required?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would someone use this? Please provide instructions.'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed to the project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How should someone test the project? What commands would they use?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'How would you like to license this project?',
      choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None']
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