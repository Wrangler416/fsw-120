import React, { Component } from "react"
import Display from "../components/Display"
import Keys from "../components/Keys"

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            entry: '',
            result: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                //result: this.state.result + ' = ' + eval(this.state.entry)
                // eslint-disable-next-line
                result: eval(this.state.entry)
            })
        } catch (error) {
            this.setState({
                result: 'Invalid Entry'
            })
        }
    }
    
    handleClick = (event) => {
        let key = event.target.name
        if (key === 'x') {key = '*'}

        switch (key) {
            case '=':
                this.calculate()
                break;
            case 'clear':
                this.setState({entry: ''})
                this.setState({result: ''})
                break;
            case 'backspace':
                
                this.setState(prevState => ({
                    entry: prevState.entry.slice(0, -1),
                    result: prevState.result.slice(0, -1)
                }))
                
                break;
            default:
                this.setState(prevState => ({
                    result: prevState.result += event.target.name
                }))
                this.setState(prevState => ({
                    entry: prevState.entry += key
                }))
        }
    }

    render() {

        console.log('this.state.entry: ', this.state.entry)
        console.log('this.state.result: ', this.state.result)

        return (
            <div className='calculator'>
                <Display result={this.state.result} />
                <Keys handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Calculator