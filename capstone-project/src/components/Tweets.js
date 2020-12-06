import React from 'react'

function tweetImg(url) {

    if (url !== undefined && url !== '') {
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
    editTweetImg,
    editInputChangeHandler) {
    if (id && id === tweet._id) {
        return (
            <div>
                <div>
                    <textarea 
                        id={tweet._id}
                        name='editTweet'
                        value={editTweet}
                        placeholder="Whats happening?" 
                        className='no-outline'
                        onChange={editInputChangeHandler} />
                </div>
                <div>
                <input 
                    type='text'
                    value={editTweetImg}
                    name='editTweetImg'
                    placeholder='Image URL:'
                    className='img-input no-outline'
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
    return (
        <div className='tweet'>
            {displayRenderer(
                props.tweet, 
                props.id,
                props.editTweet,
                props.editTweetImg,
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