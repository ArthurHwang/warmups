const chunk = (array, size) => {
  const chunks = []
  const n = array.length
  let i = 0
  while (i < n) {
    chunks.push(array.slice(i, i += size))
  }
  return chunks
}

const flatten = (array) => {
  let merged = [];
  return merged = merged.concat.apply(merged, array)
}

const pick = (obj, keys) => {
  return keys.map(key => key in obj ? {[key]: obj[key]} : {})
    .reduce((res, o) => Object.assign(res, o), {});
}

const omit = (obj, keys) => {
    let target = {}
    for(let i in obj) {
      if (keys.indexOf(i) >= 0) {continue};
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
    return target
}

const partition = (collection, predicate) => {
  let truthy = []
  let falsy = []
  let truthyAndFalsy = []
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i]) === true) {
      truthy.push(collection[i])
    }
    if (predicate(collection[i]) === false) {
      falsy.push(collection[i])
    }
  }
  truthyAndFalsy.push(truthy, falsy)
  return truthyAndFalsy
}
