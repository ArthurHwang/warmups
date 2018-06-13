const padLeft = (string, padding, maxLength) => {
  maxLength = maxLength - string.length
  padding += padding.repeat(maxLength)
  return padding.slice(0, maxLength) + string
}

const padRight = (string, padding, maxLength) => {
  maxLength = maxLength - string.length
  padding += padding.repeat(maxLength)
  return string + padding.slice(0, maxLength);
}
