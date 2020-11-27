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

        console.log('entry: ', this.state.entry)
        
        try {
            this.setState({
                // eslint-disable-next-line
                result: eval(this.state.entry)
            })
        } catch (error) {
            this.setState({
                result: 'error:' + error
            })
        }
    }
    
    handleClick = (event) => {
        switch (event.target.name) {
            case '=':
                this.calculate()
                break;
            case 'clear':
                this.setState({entry: ''})
                break;
            default:
                this.setState(prevState => ({
                    entry: prevState.entry += event.target.name
                }))
        }
    }

    render() {

        console.log('this.state.entry: ', this.state.entry)

        return (
            <div className='calculator'>
                <Display result={this.state.result} />
                <Keys handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Calculator