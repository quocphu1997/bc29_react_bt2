import React, { Component } from 'react'

export default class BangChonKinh extends Component {
    render() {
        return (
            < a style={{ padding: "1em", margin: "1em",cursor:"pointer" }
            } onClick={() => {
                this.props.selectItem(this.props.selectData)
            }} >
                <img className='img-fluid' src={this.props.selectData.url} />
            </ a>

        )

    }
}
