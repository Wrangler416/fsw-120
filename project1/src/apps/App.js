import React from "react";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

function App() {
    return (
        <div style={{width: "100%"}}>
            <div style={{width: "50%", margin: "0 auto", border: "1px solid lightgrey"}}>
                <Header />
                <BlogList />
                <Footer />
            </div>
        </div>
    )
}

export default App