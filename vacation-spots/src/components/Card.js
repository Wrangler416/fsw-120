import React from "react";

function Card(props) {
    const styles = {
        fontFamily: "Arial, Helvetica, sans-serif", 
        textAlign: "center", 
        width: "200px", 
        height: "120px", 
        border: "1px solid black", 
        padding: "5px", 
        borderRadius: "10px", 
        backgroundColor: props.bgColor
    }
    return (
        <div style={styles}>
            <h3>{props.place} {props.dollarSigns}</h3>
            <div>Cost: ${props.price}</div>
            <div>Best time to go: {props.timeToGo}</div>
        </div>
    )
}

export default Card