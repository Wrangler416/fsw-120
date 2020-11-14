import React from "react"
import Badge from "../components/Badge"

function Badges(props) {

    const badges = props.badges.reverse().map((badge, index) => {
        return (
            <Badge 
                key={index} 
                firstName={badge.firstName}
                lastName={badge.lastName} />
        )
    })

    return (
        <div>{badges}</div>
    )

}

export default Badges