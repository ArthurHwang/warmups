function createDOM(tagName) {

  const $element = document.createElement(tagName)

  return {
    element: function()  {
      return $element
    },
    attribute: function(name, value) {
      $element.setAttribute(name, value)
      return this
    },
    text: function(value) {
      $element.textContent = value
      return this
    },
    child: function (tagName) {
      const child = document.createElement(tagName)
      $element.appendChild(child)
      return createDOM(tagName)
    }
  }
  return $element
}
