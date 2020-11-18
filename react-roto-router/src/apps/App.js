import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import "../apps/App.css"

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/services" component={Services}></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App