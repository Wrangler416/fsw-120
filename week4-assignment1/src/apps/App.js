import React from "react"
import NameList from "../components/NameList"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
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
        event.preventDefault()

        this.setState(prevState => ({
            names: [...prevState.names, this.state.name]
        }))

        this.setState({name: ''})
    }

    render() {

        return (

            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "500px"}}>
                    <div style={{height: "60px"}}>
                        <h1>{this.state.name}</h1>
                    </div>
                    <div>
                        <form>
                            <input 
                                type="text" 
                                value={this.state.name} 
                                name="name" 
                                placeholder="Name" 
                                onChange={this.handleChange} />
                            <button onClick={this.handleClick}>Add</button>
                        </form>
                        <div style={{width: "300px"}}>
                            <NameList names={this.state.names} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App