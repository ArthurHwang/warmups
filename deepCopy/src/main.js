function deepCopy(input) {
  if (typeof input === "string") {
    return input
  }
  if (typeof input === "number") {
    return input
  }
  if (typeof input === "boolean") {
    return input
  }
  if (input === null) {
    return null
  }
  if (input instanceof Date && typeof input === "object") {
    const copied = new Date(input)
    return copied
  }
  if (Array.isArray(input) && input.length === 0) {
    const [...sliced] = input
    return sliced
  }
  if (Array.isArray(Object.entries(input)) && Object.entries(input).length === 0) {
    const {...spread} = input
    return spread
  }
  if (Array.isArray(input) && input.every((elem) => {return elem instanceof Date})) {
    const newMap = input.map(elem => {
      const copiedDate = new Date(elem)
      return copiedDate
    })
    return newMap
  }
  if (Array.isArray(input) && input.every(elem => {return elem !== Object(elem)})) {
    return Array.from(input)
  }
  if (Array.isArray(input) && input.every(elem => {return Array.isArray(elem)})) {
    return Array.from(input)
  }
  if (Array.isArray(Object.values(input)) && Object.values(input).every(elem => {return elem !== Object(elem)})) {
      const {...spread} = input
      return spread
  }
  if (Array.isArray(Object.values(input)) && Object.values(input).some(elem => {return elem instanceof Date})) {
      const {...spread} = input
      return spread
  }
  if (Array.isArray(Object.values(input)) && Object.values(input).some(elem => {return Array.isArray(elem)})) {
    const {...spread} = input
    return spread
  }
  if (Array.isArray(Object.values(input)) && Object.values(input).some(elem => {return elem === Object(elem)})) {
    const {...spread} = input
    return spread
  }
  // if (Array.isArray(input) && input.every((elem) => {return typeof elem === 'object'})) {
  //   const [...spread] = input
  //   console.log('hi')
  //   return spread
  // }
  // if (Array.isArray(input) && input.some((elem) => {return elem instanceof Object})) {
  //   const [...spread] = input
  //   console.log('hi')
  //   return spread
  // }
  if (Array.isArray(input) && input.every((elem) => {return elem === Object(elem)})) {
    const [...spread] = input
    console.log('hi')
    return spread
  }
}
