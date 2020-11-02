import React from "react";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

function App() {
    return (
        <div style={{maxWidth: "680px", margin: "auto"}}>
            <div>
                <Header />
                <BlogList />
                <Footer />
            </div>
        </div>
    )
}

export default App