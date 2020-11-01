import React from "react";
import NavBar from "../components/NavBar"

function Header() {
    return (
        <header style={{width: "100%", height: "250px", backgroundColor:"gray"}}>
            <NavBar />
            <h1 style={{width: "100%", textAlign: "center", marginTop: "70px", color: "white"}}>Blog Props</h1>
        </header>
    )
}

export default Header