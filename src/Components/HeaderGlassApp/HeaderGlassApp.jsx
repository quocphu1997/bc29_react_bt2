import React, { Component } from 'react'

export default class HeaderGlassApp extends Component {
  render() {
    return (
      <div>
        <h1 style={{
          backgroundColor: "rgba(0, 0, 0, 0.700)",
          color: "white",
          height: "3em",
          display: 'flex',
          justifyContent:"center",
          alignItems:"center",
          margin:"0"
        }} > TRY GLASS APP ONLINE</h1>
      </div>
    )
  }
}
