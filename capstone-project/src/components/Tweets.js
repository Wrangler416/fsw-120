import React from 'react'

function tweetImg(url) {
    if (url !== undefined) {
        return (
            <div>
                <img className='tweet-img' src={url} alt='' />
            </div>
        )
    }
    return
}

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
            <div className='tweet-title'>
                {tweet.title}
            </div>
            <div>
                {tweet.description}
            </div>
            {tweetImg(tweet.imgUrl)}
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

    console.log(props.tweet.imgUrl)

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