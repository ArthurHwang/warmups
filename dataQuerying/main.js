const test = (num) => {
  return num > 2
}

const every = (collection, callback) => {
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i]) === true) {
      count++
    } else {
      return false
    }
    if (count === collection.length) {
      return true
    }
  }
}

const some = (collection, callback) => {
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i]) === true) {
      count++
      return true
    }
  }
  if (count === 0) {
    return false
  }
}

const find = (collection, callback) => {
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i]) === true) {
      return collection[i]
    } else if (callback(collection[i] === false)) {
      continue;
    }
  }
}

const indexOf = (array, value) => {
  return array.filter((elem, ind, arr) => {
    return elem === value
  })
}


const takeWhile = (array, callback) => {
  let count = 0;
  let sliced = []
  array.forEach((elem, ind, arr) => {
    if (callback(elem) === true) {
      sliced.push(elem)
      count++
    }
  })
  if (count === 0) {
    return false
  }
  return sliced
}
