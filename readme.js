const readmeFile = {
  top:` `,
  readmeBody: [],
  add (readmeString) {
    this.readmeBody.push(readmeString)
  },
  create () {
    let final = this.top
    this.readmeBody.forEach(readmeString => {
      final += readmeString
    })
    return final
  }
}

module.exports = readmeFile