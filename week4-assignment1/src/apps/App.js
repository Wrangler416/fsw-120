import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ""
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

    handleClick() {
        
    }

    render() {
        return (
            <form>
                <h1>{this.state.name}</h1>

                <input 
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    placeholder="Name" 
                    onChange={this.handleChange} />
                    
                    <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}

export default App