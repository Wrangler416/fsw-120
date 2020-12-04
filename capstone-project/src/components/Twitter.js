import React from 'react'
import axios from 'axios'
import Tweets from '../components/Tweets'

class Twitter extends React.Component {
    constructor() {
        super()
        this.state = {
            tweets: [],
            id: '',
            tweet: '',
            editTweet: ''
        }
        this.entryInputChangeHandler = this.entryInputChangeHandler.bind(this)
        this.entrySaveClickHandler = this.entrySaveClickHandler.bind(this)
        this.editInputChangeHandler = this.editInputChangeHandler.bind(this)
    }

    componentDidMount() {
        axios.get('./data.json')
            .then(response => {
                let tweets = response.data
                this.setState({tweets})
            })
    }

    entryInputChangeHandler(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    entrySaveClickHandler(event) {

    }

    editInputChangeHandler(event) {

    }

    displayRenderer(tweet) {
        if (this.state.id && this.state.id === tweet._id) {
            return (
                <div className='todo_edit'>
                    <div>
                        <input type='checkbox' />
                        <input 
                            type='text'
                            id={tweet._id}
                            name='editTitle'
                            value={this.state.editTweet}
                            onChange={this.editInputChangeHandler} />
                    </div>
                </div>
            )
        }
        return (
            <div className='todo_display'>
                <div>
                    {tweet.content}
                </div>
            </div>
        )
    }

    editRenderer(tweet) {

    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <input 
                            type="text" 
                            value={this.state.tweet} 
                            name="tweet" 
                            placeholder="Whats happening?" 
                            onChange={this.entryInputChangeHandler} />  
                    </form>
                </div>
                <div>
                    <button onClick={this.entrySaveClickHandler}>Tweet</button>
                </div>
                <div>
                    {this.state.tweets.map((tweet, index) => 
                        <div key={index}>
                            <Tweets 
                                tweet={tweet}
                                id={this.state.id}
                                editTweet={this.state.editTweet}
                                editInputChangeHandler={this.editInputChangeHandler} />
                            
                            {this.editRenderer(tweet)}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Twitter