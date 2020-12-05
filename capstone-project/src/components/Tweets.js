import React from 'react'

function displayRenderer(
    tweet, 
    id, 
    editTweet, 
    editInputChangeHandler) {
    if (id && id === tweet._id) {
        return (
            <div>
                <div>
                    <textarea 
                        id={tweet._id}
                        name='editTweet'
                        value={editTweet}
                        onChange={editInputChangeHandler} />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>
                {tweet.title}
            </div>
        </div>
    )
}

function editRenderer(
    tweet, 
    id,
    editClickHandler,
    deleteClickHandler,
    editSaveClickHandler,
    editCancelClickHandler
    ) {
    if (id && id === tweet._id) {
        return (
            <div>
                <button id={tweet._id}
                    onClick={editSaveClickHandler}>
                    Save
                </button>
                <button 
                    onClick={editCancelClickHandler}>
                    Cancel
                </button>
            </div>
        )
    }
    return (
        <div>
            <button onClick={() => editClickHandler(tweet)}>
                Edit
            </button>
            <button onClick={() => deleteClickHandler(tweet)}>
                Delete
            </button>
        </div>
    )
}

function Tweets(props) {
    return (
        <div className='tweet'>
            {displayRenderer(
                props.tweet, 
                props.id,
                props.editTweet,
                props.editInputChangeHandler
            )}
            {editRenderer(
                props.tweet, 
                props.id,
                props.editClickHandler,
                props.deleteClickHandler,
                props.editSaveClickHandler,
                props.editCancelClickHandler
            )}
        </div>
    )
}

export default Tweets