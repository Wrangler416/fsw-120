import React from 'react'

function Display(props) {
    return (
        <div className='result'>
            <p>{props.result}</p>
        </div>
    )
}

export default Display