import React from "react"

function InfoBox(props) {
    const styles = {
        width: "200px",
        height: "200px",
        border: "1px solid black",
        textAlign: "center",
        backgroundColor: props.backgroundColor
    }
    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <span>{props.info}</span>
        </div>
    )
}

export default InfoBox