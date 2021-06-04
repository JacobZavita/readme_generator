const readmeFile = {
  value: '',
  create (readme) {
    this.value += `# ${readme.title}\n`
    this.value += `Github Repo: https://github.com/${readme.github}/${readme.title}\n![GitHub license](https://img.shields.io/badge/license-${readme.license}-blue.svg)\n`
    this.value += `## Description\n${readme.description}\n\n# Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n`
    this.value += `# Installation\n${readme.installation}\n`
    this.value += `# Usage\n${readme.usage}\n`
    this.value += `# License\nThis project is licensed under the ${readme.license} terms.\n`
    this.value += `# Contributing\nContributors: ${readme.contributing}\n`
    this.value += `# Tests\nThe following is needed to test the project: ${readme.tests}\n`
    this.value += `# Questions\nIf you have questions, suggestions, or ideas about the repo, open an issue or contact https://github.com/${readme.github} or email ${readme.email}`
  },
  get () {
    return this.value
  }
}

module.exports = readmeFile