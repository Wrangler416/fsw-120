import React, { Component } from "react"
import Display from "../components/Display"
import Keys from "../components/Keys"

class Calculator extends Component {
    constructor() {
        super()
        this.state = {}

        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        console.log(event.target.name)
    }

    render() {

        return (
            <div className='calculator'>
                <Display />
                <Keys handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Calculator