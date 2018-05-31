function createElement(tagName , attributes, children) {
  let element = document.createElement(tagName);
  for(key in attributes) {
    element.setAttribute(key, attributes[key])
  }
  children.forEach(elem => {
    let child = document.createTextNode(elem)
    element.appendChild(child)
  })
  return element;
}
