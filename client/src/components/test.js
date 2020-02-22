import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()
    this.state = {
      snippets: []
    }
  }

  componentDidMount() {
    fetch('/snippets.json').then(response => response.json())
    .then(json => this.setState(
      {
        snippets: json.results
      }
    ))
  }

  render() {
    return (
      <div>
        {this.state.snippets.map(snip => <li>{snip.code}</li>)}
      </div>
    )
  }
}