import React from 'react'

function Display(props) {
    return (
        <div className='result'>
            <div className='display'>{props.display}</div>
            <p>{props.result}</p>
        </div>
    )
}

export default Display