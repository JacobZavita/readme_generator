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
    this.value += `## ${readme.description}\n`
    this.value += `## ${readme.installation}\n`
    this.value += `## ${readme.usage}\n`
    this.value += `## ${readme.contributing}\n`
    this.value += `## ${readme.tests}\n`
    this.value += `## ${readme.license}\n`
    this.value += `## ${readme.github}\n`
    this.value += `## ${readme.email}\n`
  },
  get () {
    return this.value
  }
}

module.exports = readmeFile