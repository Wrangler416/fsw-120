import React from 'react'

function Entry(props) {
    return (
        <div className='tweet-input'>
            <form>
                <textarea 
                    value={props.tweet} 
                    name="tweet" 
                    placeholder="Whats happening?" 
                    className='no-outline' 
                    onChange={props.entryInputChangeHandler} />  
                <button onClick={props.entrySaveClickHandler}>Tweet</button>
            </form>
        </div>
    )
}

export default Entry