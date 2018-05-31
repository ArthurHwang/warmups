function createElement(tagName , attributes, children) {
  let element = document.createElement(tagName);
  for(key in attributes) {
    element.setAttribute(key, attributes[key])
  }
  element.innerHTML = children
  return element;
}
