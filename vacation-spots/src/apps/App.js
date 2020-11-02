import React from "react";
import vacationSpots from "../vacationSpots";
import Card from "../components/Card";

function App() {
    const cardComponents = vacationSpots.map(spot => <Card />)
    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default App