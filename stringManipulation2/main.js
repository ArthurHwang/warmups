const startsWith = (string, substring) => {
  let n = substring.length
  let x = string.slice(0, n)
  if (substring === x) {
    return true
  } else if (substring !== x) {
    return false
  }
}

const endsWith = (string, substring) => {
  let i = string.length
  let n = substring.length
  let x = string.slice(i - n, i)
  if (substring === x) {
    return true
  } else if (substring !== x) {
    return false
  }
}
