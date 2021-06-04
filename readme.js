// const readmeFile = {
//   top:`Title:`,
//   readmeBody: [],
//   readmeDescription: [],
//   add (readmeString) {
//     this.readmeBody.push(readmeString)
    // this.readmeDescription.push(readmeString)
//   },
//   create () {
//     let final = this.top
//     this.readmeBody.forEach(readmeString => {
//       final += readmeString
//     })
//     return final
//   }
// }

// module.exports = readmeFile

const readmeFile = {
  value: '',
  create (readme) {
    this.value += `# ${readme.title}\n`
    this.value += `https://github.com/${readme.github}/${readme.title}\n`
    this.value += `## Description\n${readme.description}\n\n# Table of Contents\n* [Installation](#installation)\n* [Usage](#Usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n`
    this.value += `# Installation\n${readme.installation}\n`
    this.value += `# Usage\n${readme.usage}\n`
    this.value += `# License\n${readme.license}\n`
    this.value += `# Contributing\n${readme.contributing}\n`
    this.value += `# Tests\n${readme.tests}\n`
    this.value += `# Questions\n${readme.github}\n`
    this.value += `# ${readme.email}\n`
  },
  get () {
    return this.value
  }
}

module.exports = readmeFile