import React, { Fragment, Component } from 'react'
import Nav from './nav'
import Pokedex from './pokedex'
import * as queryString from './query-string'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
    this.hashChangeHandler = this.hashChangeHandler.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', (e) => {
      const hash = document.location.hash
      const parsed = queryString.parse(hash)
      const hashValue = Object.values(parsed)[0]
      if (hashValue === undefined) {
        this.setState({type: ''})
      }
      else if (hashValue === 'grass') {
        this.setState({type: 'grass'})
      }
      else if (hashValue === 'fire') {
        this.setState({type: 'fire'})
      }
      else if (hashValue === 'water') {
        this.setState({type: 'water'})
      }
    })
    window.dispatchEvent(new Event('hashchange'))
  }
  render() {
    const { type } = this.state
    const { pokedex } = this.props
    const activePokemon = type
      ? pokedex.filter(pokemon => pokemon.type === type)
      : pokedex
    return (
      <Fragment>
        <h1 className="text-center">Pokedex</h1>
        <div className="container">
          <Nav activeType={type}/>
          <Pokedex pokedex={activePokemon}/>
        </div>
      </Fragment>
    )
  }
}
