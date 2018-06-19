function indexOf(string, substring) {
  let newString = string.toLowerCase().split('')
  let newSubString = substring.toLowerCase().split('')
  let chunkedString = chunk(newString, substring.length)



  if (substring === '') {
    return 0
  }

  if (string.includes(substring)) {
    return
  }


  for (let i = 0; i < chunkedString.length; i++) {


    if (chunkedString[i].join('') === newSubString.join('')) {
      return i
    }
  }

  for (let i = 0; i < newString.length; i++) {
    for (let j = 0; j < newSubString.length; j++) {
      if (newString[i] === newSubString[j]) {
        return "2loop" + i
      }
    }
  }
}



function chunk(array, size) {
  const chunks = [];
  const n = array.length
  let i = 0
  while (i < n) {
    chunks.push(array.slice(i, i += size))
  }
  return chunks
}


=== newSubString.join('')


  if (substring === '') {
    return 0
  } // return string.charAt(i) === substring[0] ? i : -1

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === substring[0] ||) {
      return i
    }
  }
  if (string[string.length -1 ] !== substring[0]) {
    return -1
  }
}

// for (let i = 0; i < string.length; i++) {
//   for(let j = 0; i < substring.length; i++)
//   if (newSubString[j] === newString[i]) {
//     return newSubString[j]
//   }
// }
//
// newString.forEach((m1,index) => newSubString.forEach((m2)=> {
//   if(m1 === m2) {
//     return index
//   } else if (m1 !== m2) {
//     return -1
//   }
// }))

//
// for (let char of newString) {
//   newStringObj[char] = newStringObj[char]
// }
//
//
// for (let char of newSubString) {
//   newSubStringObj[char] = newSubStringObj[char]
// }
//
// console.log(newStringObj)
// console.log(newSubStringObj)
// console.log(Object.keys(newStringObj))

// for (let i = 0; i < newString.length; i++) {
//
//   if (newString[i] === newSubString) {
//     result = i
//   }
// }
// return result
}




console.log(newStringObj)
console.log(newSubStringObj)
