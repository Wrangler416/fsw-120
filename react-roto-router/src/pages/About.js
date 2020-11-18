import React from "react"
import about_logo from "../img/about.png"

function About() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: "600px", 
                height: "570px", 
                border: "1px solid black",
                padding: "10px"}}>
                <h1 style={{textAlign: "center"}}>Roto-Router Plumbing</h1>
                <div style={{textAlign: "center"}}>
                    <h2>About Us ..</h2>
                    <img src={about_logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default About