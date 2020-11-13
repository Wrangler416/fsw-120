import React from "react"
//import Badge from "../components/Badge"
//import Badges from "../components/Badges"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            firstName: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {

    }

    handleClick(event) {

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

                    <button 
                        disabled={!this.state.value}
                        onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}

export default App