import React from "react"
//import Badge from "../components/Badge"
//import Badges from "../components/Badges"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick(event) {

    }

    completed() {
        if (this.state.firstName 
            && this.state.lastName) {
            return true
        } else {
            return false
        }
    }

    render() {

        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange} />
                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange} />
                    <button 
                        disabled={!this.completed()} 
                        onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}

export default App