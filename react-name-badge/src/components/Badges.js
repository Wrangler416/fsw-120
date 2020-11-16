import React from "react"
import Badge from "../components/Badge"

function Badges(props) {
    const badges = props.badges.map((badge, index) => {
        return (
            <Badge 
                key={index}
                index={index}
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                birthPlace={badge.birthPlace}
                phone={badge.phone}
                favFood={badge.favFood}
                about={badge.about} />
        )
    })
    return (
        <div>{badges}</div>
    )
}

export default Badges