import React from "react"

class Square extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {

        return (
            <div style={{backgroundColor: this.props.color, 
                display: "flex",  
                border: "1px solid black"}}>
            </div>
        )
    }
}

export default Square