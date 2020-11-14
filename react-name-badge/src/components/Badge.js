import React from "react"

function Badge(props) {

    return (
        <div style={{width: "500px", 
            border: "1px solid black", 
            borderRadius: "5px"}}>
            <div>Badge:</div>
            <div>
                Name: {props.firstName} {props.lastName}
            </div>
        </div>
        
    )

}

export default Badge