import React from "react"

function NavBar() {
    return (
        <nav style={{width: "600px"}}>
            <div style={{width: "600px", textAlign: "right", marginTop: "0", padding: "10px", fontSize: ".8em", color: "white"}}>
                <span style={{display: "inline", paddingRight: "20px"}}>Home</span>
                <span style={{display: "inline", paddingRight: "20px"}}>About</span>
                <span style={{display: "inline", paddingRight: "20px"}}>Sample Post</span>
                <span style={{display: "inline", paddingRight: "10px"}}>Contact</span>
            </div>
        </nav>
    )
}

export default NavBar