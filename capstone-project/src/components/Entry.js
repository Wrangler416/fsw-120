import React from 'react'

function Entry(props) {
    return (
        <div className='tweet-input'>
            <form>
                <div>
                <textarea 
                    value={props.tweet} 
                    name="tweet" 
                    placeholder="Whats happening?" 
                    className='no-outline' 
                    onChange={props.entryInputChangeHandler} />
                </div>
                <div>
                <textarea 
                    type='text'
                    value={props.tweetImg}
                    name='tweetImg'
                    placeholder='Image URL:'
                    className='img-input no-outline'
                    onChange={props.entryInputChangeHandler} />
                </div>
                <div className='tweet-submit'>
                    <button onClick={props.entrySaveClickHandler}>Tweet</button>
                </div>
            </form>
        </div>
    )
}

export default Entry