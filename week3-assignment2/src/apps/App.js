import React from "react"
import DiceBox from "../components/DiceBox"
import Die from "../components/Die"

function App() {

  function randomNumber() {
    return Math.floor(Math.random() * 6)
  }

  return (
    <div>
      <div>
        <h1>Part 1 - Dice Box</h1>
        <DiceBox />
      </div>

      <div>
        <h1>Part 2 - Die Components</h1>
      </div>
      <div style={{display: "flex", gap: "5px"}}>
        <div>
          <Die randomNumber={randomNumber()} />
        </div>
        <div>
          <Die randomNumber={randomNumber()} />
        </div>
      </div>
      
    </div>
  )
}

export default App