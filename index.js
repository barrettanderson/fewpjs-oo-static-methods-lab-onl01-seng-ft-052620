class Formatter {
  //add static methods here

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]+/g, '' )
  }

  static titleize(sentence) {
    let ignoredWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = sentence.split(" ")
    let capitalized = array.map(word => {
      if(!ignoredWords.includes(word)) {
        return this.capitalize(word)
      } else { return word }
    })
    capitalized[0] = this.capitalize(capitalized[0])
    return capitalized.join(" ")
  }
}