import React from "react"
import services_logo from "../img/services.png"

function Services() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: "600px", 
                height: "570px", 
                border: "1px solid black",
                padding: "10px"}}>
                <h1 style={{textAlign: "center"}}>Roto-Router Plumbing</h1>
                <div style={{textAlign: "center"}}>
                    <h2>Services ..</h2>
                    <img src={services_logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Services