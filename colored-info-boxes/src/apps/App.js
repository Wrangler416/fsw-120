import React from "react"
import InfoBox from "../components/InfoBox"

function App() {
    return (
        <div>
            <InfoBox 
                backgroundColor="steelblue"
                title="Box 1"
                subTitle="Sub-Title 1"
                info="Information for box 1" />
            <InfoBox 
                backgroundColor="salmon"
                title="Box 2"
                subTitle="Sub-Title 2"
                info="Information for box 2" />
            <InfoBox 
                backgroundColor="cyan"
                title="Box 3"
                subTitle="Sub-Title 3"
                info="Information for box 3" />
        </div>
    )
}

export default App