import React from 'react'
import './App.css'
import Twitter from '../components/Twitter'

function App() {
    return (
        <div className='app'>
            <div className='title'>
                <h1>A Basic "Twitter" Interface</h1>
            </div>
            <Twitter />
        </div>
    )
}

export default App