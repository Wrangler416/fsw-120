import React from "react"
import InfoBox from "../components/InfoBox"

function App() {
    return (
        <div style={{display: "flex"}}>
            <InfoBox 
                backgroundColor="orange"
                title="Box 1"
                subTitle="Sub-Title 1"
                info="Information for box 1" />
            <InfoBox 
                backgroundColor="brown"
                title="Box 2"
                subTitle="Sub-Title 2"
                info="Information for box 2" />
            <InfoBox 
                backgroundColor="red"
                title="Box 3"
                subTitle="Sub-Title 3"
                info="Information for box 3" />
            <InfoBox 
                backgroundColor="yellow"
                title="Box 4"
                subTitle="Sub-Title 4"
                info="Information for box 4" />
            <InfoBox 
                backgroundColor="orange"
                title="Box 5"
                subTitle="Sub-Title 5"
                info="Information for box 5" />
        </div>
    )
}

export default App