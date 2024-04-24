import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

export default class App extends Component {
    // name = "Manisha"
  render() {
    return (
      <div>
        <Navbar/>
        {/* Hello, This is {this.name}'s news app */}
        
        <News pageSize = "16"/>
      </div>
    )
  }
}


