import React from "react"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: this.randomNumber(),
            num2: this.randomNumber(),
            num3: this.randomNumber(),
            num4: this.randomNumber(),
            num5: this.randomNumber()
        }

        this.randomizeNumbers = this.randomizeNumbers.bind(this)
    }

    randomNumber = () => {
        return Math.floor(Math.random() * 6)
    }

    randomizeNumbers = () => {
        this.setState(prevState => {
            return {
                num1: prevState.num1 = this.randomNumber(),
                num2: prevState.num2 = this.randomNumber(),
                num3: prevState.num3 = this.randomNumber(),
                num4: prevState.num4 = this.randomNumber(),
                num5: prevState.num5 = this.randomNumber()
            }
        })
    }

    render() {

        const styles = {
            width: "25px",
            height: "25px",
            backgroundColor: "black",
            color: "white",
            border: "1px solid black",
            padding: "5px",
            textAlign: "center"
        }

        return (
            <div>
                <div style={{display: "flex", 
                    gap: "5px", 
                    padding: "10px", 
                    border: "1px solid black", 
                    width: "150px"}}>
                    <div style={styles}>{this.state.num1}</div>
                    <div style={styles}>{this.state.num2}</div>
                    <div style={styles}>{this.state.num3}</div>
                    <div style={styles}>{this.state.num4}</div>
                    <div style={styles}>{this.state.num5}</div>
                </div>
                <div style={{padding: "10px"}}>
                    <button onClick={this.randomizeNumbers}>Click to Randomize</button>
                </div>
            </div>
        )
    }
}

export default DiceBox