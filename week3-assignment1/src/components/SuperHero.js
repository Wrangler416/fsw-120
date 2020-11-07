import React from "react"

function SuperHero(props) {
    return (
        <div onClick={() => props.showCatchPhrase(props.superHero.catchPhrase)}>
            <h3>{props.superHero.name} - {props.superHero.show}</h3>
            <img src={props.superHero.imageName} alt={props.superHero.name} />
        </div>
    )
}

export default SuperHero