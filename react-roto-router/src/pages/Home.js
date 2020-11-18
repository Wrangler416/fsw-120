import React from "react"
import logo from "../img/plumbing.jpg"

function Home() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "600px", 
            height: "570px", 
            border: "1px solid black",
            padding: "10px"}}>
            <h1 style={{textAlign: "center"}}>Roto-Router Plumbing</h1>
            <div style={{textAlign: "center"}}>
                <img src={logo} alt="Logo" />
            </div>
        </div>
    </div>
    )
}

export default Home