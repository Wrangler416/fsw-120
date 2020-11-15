import React from "react"

function Badge(props) {

    console.log(props.index)

    return (
        <div style={{padding: "10px", border: "1px solid red"}}>
            <div style={{width: "575px", 
                border: "1px solid black", 
                borderRadius: "5px"}}>
                <div style={{height: "15px", padding: "10px", borderRadius: "5px", 
                    backgroundColor: props.index % 2 === 0 ? "salmon" : "lightgray"}}>Badge:</div>
                <div>
                    Name: {props.firstName} {props.lastName}
                    Phone: {props.phone}
                </div>
                <div>
                    Place of Birth: {props.birthPlace}
                    Favorite food: {props.favFood}
                </div>
                <div>
                    Email: {props.email}
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        
    )

}

export default Badge