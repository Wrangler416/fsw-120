import React from "react";
import vacationSpots from "../vacationSpots";
import Card from "../components/Card";

function App() {

    const cardComponents = vacationSpots.map(function(spot) {
        let bgColor;
        let dollarSigns;

        spot.timeToGo === 'Spring' ? bgColor = 'pink'
            : spot.timeToGo === 'Summer' ? bgColor = 'yellow'
            : spot.timeToGo === 'Fall' ? bgColor = 'orange'
            : bgColor = 'lightblue';

        spot.price < 500 ? dollarSigns = '$' 
            : spot.price < 1000 ? dollarSigns = '$$' 
            : dollarSigns = '$$$';

        return <Card 
            key={spot.id}
            place={spot.place} 
            price={spot.price} 
            timeToGo={spot.timeToGo}
            bgColor={bgColor}
            dollarSigns={dollarSigns} />
    })

    return (
        <div style={{display: "flex"}}>
            {cardComponents}
        </div>
    )
}

export default App