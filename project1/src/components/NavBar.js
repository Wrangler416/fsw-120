import React from "react";

function NavBar() {
    return (
        <nav style={{width: "100%"}}>
            <div style={{width: "100%", textAlign: "right", marginTop: "0", color: "white"}}>
                <span style={{display: "inline", paddingRight: "20px"}}>Home</span>
                <span style={{display: "inline", paddingRight: "20px"}}>About</span>
                <span style={{display: "inline", paddingRight: "20px"}}>Sample Post</span>
                <span style={{display: "inline", paddingRight: "10px"}}>Contact</span>
            </div>
        </nav>
    )
}

export default NavBar