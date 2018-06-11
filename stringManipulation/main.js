const firstChar = (string) => {
  return string.split('')[0]
}

const lastChar = (string) => {
  return string.split('')[string.length - 1]
}

const repeat = (string, number) => {
  let repeatedString = ''
  while (number > 0) {
    repeatedString += string
    number--
  }
  return repeatedString
}

const ransomCase = (string) => {
  let response = ''
  for (i = 0; i < string.length; i++) {
    response += i % 2 === 0 ? string.charAt(i).toUpperCase() : string.charAt(i)
  }
  return response;
}

const reverse = (string) => {
  let reversedString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]  }
  return reversedString
}

const capitalize = string => {
  let capital = string.slice(0, 1).toUpperCase()
  capital += string.slice(1, string.length)
  return capital;
}
