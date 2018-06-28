function deepEquals(x, y) {

  // if (JSON.stringify(x) === JSON.stringify(y)) {
  // return true
  //
  // }

if (x instanceof Date && y instanceof Date) {
  return x.getTime() === y.getTime() ? true : false

}
// if (Array.isArray(x) && Array.isArray(y)) {
//   return true
// }
//
if (Object.prototype.toString.call(x) ==
    Object.prototype.toString.call(y)) {
  return true
}
if (Object.prototype.toString.call(x).includes("Array") &&
    Object.prototype.toString.call(y).includes("Array")) {
  return true
}

// if (Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) {
//   return false
// }
// if(x == y) {
//   return true
// }
// if (x != y) {
//   return false
// }
// if  (x !== y ) {
//   return false
// }
if(x === y) {
  return true
}
if (x !== y) {
  return false
}






}
// if (typeof x === 'object' && typeof y === 'object') {
//   return true
// }
// if (x == y) {
//   return false
// }
// if (x instanceof Date && y instanceof Date) {
//
//   x.getTime() === y.getTime() ? true : false

  // if (x == y) {
  //   return false
  // }

// }





// if (x.getTime() !== y.getTime()) {
//   return false
// }
// if (!(x instanceof Date) && y instanceof Date) {
//   return false
// }
// if (!Array.isArray(x) && Array.isArray(y)) {
//   return false
// }
// if (Array.isArray(x) && Array.isArray(y)) {
//   return true
// }

  // if (x == y) {
  //   return true
  // }
  // if (x != y) {
  //   return false
  // }
