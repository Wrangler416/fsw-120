import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Services from "../components/Services"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App