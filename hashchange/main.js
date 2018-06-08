renderApp(state)

function renderApp(state) {
  var $app = document.querySelector('#app')
  $app.innerHTML = ''
  $app.appendChild(renderPokedex(state.pokedex, state.type))
}

window.addEventListener('hashchange', (e)  => {
  let parsedURL = Object.values(queryString.parse(window.location.hash)).toString()
    if (parsedURL === 'fire') {
      state.type = 'fire'
      renderApp(state)
    }
    if (parsedURL === 'grass') {
      state.type = 'grass'
      renderApp(state)
    }
    if (parsedURL === 'water') {
      state.type = 'water'
      renderApp(state)
    }
    if (parsedURL === '') {
      state.type = ''
      renderApp(state)
    }
})
