import React from "react"

class Die extends React.Component {
    constructor() {
        super()
        this.state = {}
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
            <div style={styles}>
                {this.props.randomNumber}
            </div>
        )
    }
}

export default Die