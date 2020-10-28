import React from "react"
import InfoBox from "../components/InfoBox"

function App() {
    return (
        <div>
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
                    backgroundColor="blue"
                    title="Box 5"
                    subTitle="Sub-Title 5"
                    info="Information for box 5" />
            </div>
            <div style={{display: "flex"}}>
                <InfoBox 
                    backgroundColor="steelblue"
                    title="Box 6"
                    subTitle="Sub-Title 6"
                    info="Information for box 6" />
                <InfoBox 
                    backgroundColor="gray"
                    title="Box 7"
                    subTitle="Sub-Title 7"
                    info="Information for box 7" />
                <InfoBox 
                    backgroundColor="salmon"
                    title="Box 8"
                    subTitle="Sub-Title 8"
                    info="Information for box 8" />
                <InfoBox 
                    backgroundColor="cyan"
                    title="Box 9"
                    subTitle="Sub-Title 9"
                    info="Information for box 9" />
                <InfoBox 
                    backgroundColor="green"
                    title="Box 10"
                    subTitle="Sub-Title 10"
                    info="Information for box 10" />
            </div>
        </div>
    )
}

export default App