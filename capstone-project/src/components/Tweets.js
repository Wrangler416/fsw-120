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
                    <input 
                        type='text'
                        id={tweet._id}
                        name='editTitle'
                        value={editTweet}
                        onChange={editInputChangeHandler} />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>
                {tweet.content}
            </div>
        </div>
    )
}

function editRenderer(
    tweet, 
    id, 
    editSaveClickHandler,
    editCancelClickHandler,
    editClickHandler,
    deleteClickHandler) {
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
        <div>
            {displayRenderer(
                props.tweet, 
                props.id,
                props.editTweet,
                props.editInputChangeHandler)}
        </div>
    )
}

export default Tweets