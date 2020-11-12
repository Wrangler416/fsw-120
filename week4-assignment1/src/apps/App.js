import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            names: []
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
        this.setState(prevState => ({
            names: [...prevState.names, this.state.name]
        }))

        event.preventDefault()
    }

    render() {
        const listItems = this.state.names.map((name, index) => {
            return <li key={index}>{name}</li>
        })

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
                <ol>{listItems}</ol>
            </form>
        )
    }
}

export default App