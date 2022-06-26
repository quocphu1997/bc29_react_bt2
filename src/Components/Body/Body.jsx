import React, { Component } from 'react'

import dataGlass from '../../../src/Data/dataGlasses.json'
import BangChonKinh from './BangChonKinh/BangChonKinh'


export default class Body extends Component {
    state = {
        selectGlass: dataGlass[0],
    }
    renderGlasses = () => {
        return dataGlass.map(ele => {
            return (
                <div style={{ display: "flex", width: '200px', margin: '1em', border: "1px solid", }} key={ele.id}>
                    <BangChonKinh selectItem={this.changGlasses} selectData={ele} />
                </div>


            )
        })
    }
    changGlasses = (glasses) => {
        console.log(glasses)
        this.setState({
            selectGlass: glasses,
        })
    }
    render() {
        const { id, price, name, url, desc } = this.state.selectGlass
        return (
            <div>
                <div className='bodyClasses ' >
                    <div className="ModelTryClass container" >
                        <div className="d-flex justify-content-center">
                            <div className="card bg-dark " style={{ width: '25rem', color: "white" }}>
                                <img className="card-img-top" src="./glassesImage/model.jpg" alt="Card image cap" />
                                <img style={{ position: "absolute", width: '230px', top: '120px', left: "85px" }} src={url} alt="" />
                                <div className="card-body text-start">
                                    <h5 className="card-title" style={{ color: "Red" }}>
                                        {name} - <span style={{color:'green'}}>Price: {price}$</span>
                                    </h5>
                                    <p className="card-text">{desc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container w-75">
                            <div className='row bg-light justify-content-center mt-4 pt-4'>
                                {this.renderGlasses()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
