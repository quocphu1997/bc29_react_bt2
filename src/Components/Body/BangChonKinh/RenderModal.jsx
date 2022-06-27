import React, { Component } from 'react'

export default class RenderModal extends Component {
  render() {
    const { id, price, name, url, desc } = this.props.ModalGlasses
    return (
      <div>
        <img style={{ position: "absolute", width: '230px', top: '120px', left: "85px" }} src={url} alt="" />
        <div className="card-body text-start">
          <h5 className="card-title" style={{ color: "Red" }}>
            {name} - <span style={{ color: 'green' }}>Price: {price}$</span>
          </h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    )
  }
}
