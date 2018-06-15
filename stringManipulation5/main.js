const includes = (string, substring) => {
  const chunkedString = []
  let i = 0
  while (i < string.length) {
    chunkedString.push(string.slice(i, i + substring.length))
    i++
  }
  for (let j = 0; j < chunkedString.length; j++) {
    if (chunkedString[j] === substring || substring === '') {
      return true
    } else if (j === chunkedString.length - 1) {
      return false
    }
  }
}
