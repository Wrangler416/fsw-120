import React from "react"

function formatPhone(num) {
    return num.slice(0, 3) + '-' 
        + num.slice(3, 6) + '-' + num.slice(6)
}

function Badge(props) {
    return (
        <div style={{padding: "10px"}}>
            <div style={{width: "600px", 
                border: "1px solid black", 
                borderRadius: "5px"}}>
                <div style={{height: "15px", padding: "10px", borderRadius: "5px", 
                    backgroundColor: props.index % 2 === 0 ? "salmon" : "lightgray"}}>Badge:</div>
                <div style={{padding: "10px"}}>
                    <span className="left_column">Name: {props.firstName} {props.lastName}</span>
                    <span className="right_column">Phone: {formatPhone(props.phone)}</span> 
                </div>
                <div style={{padding: "10px"}}>
                    <span className="left_column">Place of Birth: {props.birthPlace}</span>
                    <span className="right_column">Favorite food: {props.favFood}</span>
                </div>
                <div style={{padding: "10px"}}>
                    <span className="left_column">Email: {props.email}</span>
                </div>
                <div style={{padding: "10px"}}>
                    <span className="full_column">{props.about}</span>
                </div>
            </div>
        </div>
    )
}

export default Badge