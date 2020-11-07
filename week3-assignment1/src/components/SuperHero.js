import React from "react"

function SuperHero(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.imageName} alt='' />
        </div>
    )
}

export default SuperHero