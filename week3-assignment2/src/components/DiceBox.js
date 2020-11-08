import React from "react"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.randomizeNumbers = this.randomizeNumbers.bind(this)
    }

    randomNumber = (num) => {
        
    }

    randomizeNumbers = () => {
        this.setState(prevState => {
            return {
                num1: prevState.num1 = Math.floor(Math.random() * 6),
                num2: prevState.num2 = Math.floor(Math.random() * 6)
            }
        })
    }

    render() {

        return (
            <div>
                <h3>{this.state.num1}{this.state.num2}</h3>
                <button onClick={this.randomizeNumbers}>Click to Randomize</button>
            </div>
        )
    }
}

export default DiceBox