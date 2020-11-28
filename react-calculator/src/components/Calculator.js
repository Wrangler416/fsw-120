import React, { Component } from "react"
import Display from "../components/Display"
import Keys from "../components/Keys"

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            equation: '',
            display: '',
            result: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: eval(this.state.equation)
            })
        } catch (error) {
            this.setState({
                result: 'Invalid Entry'
            })
        }
    }
    
    handleClick = (event) => {
        let key = event.target.name
        let displayKey = event.target.name
        if (displayKey === '*') {displayKey = 'x'}

        switch (key) {
            case '=':
                this.calculate()
                break;
            case 'clear':
                this.setState({equation: '', display: '', result: ''})
                break;
            case 'backspace':
                this.setState(prevState => ({
                    equation: prevState.equation.slice(0, -1),
                    display: prevState.display.slice(0, -1)
                }))
                break;
            default:
                this.setState(prevState => ({
                    equation: prevState.equation += key
                }))
                this.setState(prevState => ({
                    display: prevState.display += displayKey
                }))
        }
    }

    render() {
        return (
            <div className='calculator'>
                <Display 
                    display={this.state.display} 
                    result={this.state.result} />
                <Keys handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Calculator