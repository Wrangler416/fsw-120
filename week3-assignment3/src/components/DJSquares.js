import React from "react"
import Square from "../components/Square"
import dingSound from "../dingSound.mp3"
import churchBell from "../churchBell.mp3"
import bellTone from "../bellTone.mp3"

class DJSquares extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    render() {

        const gridStyle = {
            display: "grid",
            gridTemplateColumns: "150px 150px",
            height: "200px",
            justifyContent: "center",
            gap: "5px",
            padding: "10px"
        }

        const squareComponents = this.state.colors.map(function(color, index) {
            return <Square key={index} color={color} />
        })

        return (
            <div>
                <h2>DJ Squares</h2>
                <div style={gridStyle}>{squareComponents}</div>
                <div>
                    <button onClick={() => {
                        this.state.colors[0] === "white" 
                            ? this.setState({colors: ["black", "black", "black", "black"]})
                            : this.setState({colors: ["white", "white", "white", "white"]})
                            const ding = new Audio(dingSound)
                            ding.play()
                    }}>Toggle White/Black</button>
                    <button onClick={() => {
                        this.setState({colors: ["purple", "purple", this.state.colors[2], this.state.colors[3]]})
                        const bell = new Audio(churchBell)
                        bell.play()
                    }}>Purple Tops</button>
                    <button onClick={() => {
                        this.setState({colors: [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]})
                        const tone = new Audio(bellTone)
                        tone.play()
                    }}>Bottom Left Blue</button>
                    <button onClick={() => {
                        this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "blue"]})
                        const ding = new Audio(dingSound)
                        ding.play()
                    }}>Bottom Right Blue</button>
                </div>
                <div>
                    <button onClick={() => {
                        this.setState({colors: ["red", this.state.colors[1], this.state.colors[2], this.state.colors[3]]})
                        const tone = new Audio(bellTone)
                        tone.play()
                    }}>Top Left</button>
                    <button onClick={() => {
                        this.setState({colors: [this.state.colors[0], "orange", this.state.colors[2], this.state.colors[3]]})
                        const ding = new Audio(dingSound)
                        ding.play()
                    }}>Top Right</button>
                    <button onClick={() => {
                        this.setState({colors: [this.state.colors[0], this.state.colors[1], "yellow", this.state.colors[3]]})
                        const tone = new Audio(bellTone)
                        tone.play()
                    }}>Bottom Left</button>
                    <button onClick={() => {
                        this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "green"]})
                        const ding = new Audio(dingSound)
                        ding.play()
                    }}>Bottom Right</button>
                </div>
                <div style={{padding: "10px"}}>
                    <select id="seasons" onChange={() => {
                        let seasons = document.getElementById('seasons')
                        switch (seasons.value) {
                            case "Fall" :
                                this.setState({colors: ["brown", "orange", "yellow", "red"]})
                                break;
                            case "Spring" :
                                this.setState({colors: ["cyan", "pink", "green", "yellow"]})
                                break;
                            case "Summer" :
                                this.setState({colors: ["yellow", "cyan", "orange", "red"]})
                                break;
                            case "Winter" :
                                this.setState({colors: ["blue", "gray", "lightgray", "green"]})
                                break;
                            default:
                        }
                    }}>
                        <option value="">-Select-</option>
                        <option value="Fall">Fall</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default DJSquares