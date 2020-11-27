import React from 'react'
import "./App.css"
import Calculator from '../components/Calculator'
import Footer from '../components/Footer'

function App() {
    return (
        <div className='app'>
            <h1>React Calculator</h1>
            <Calculator />
            <Footer />
        </div>
    )
}

export default App