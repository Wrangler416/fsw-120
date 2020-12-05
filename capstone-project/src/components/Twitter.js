import React from 'react'
import axios from 'axios'
import Tweets from '../components/Tweets'

class Twitter extends React.Component {
    constructor() {
        super()
        this.state = {
            url: 'https://api.vschool.io/toddpolak-fsw-120/todo/',
            tweets: [],
            id: '',
            tweet: '',
            editTweet: ''
        }
        this.entryInputChangeHandler = this.entryInputChangeHandler.bind(this)
        this.entrySaveClickHandler = this.entrySaveClickHandler.bind(this)
        this.editInputChangeHandler = this.editInputChangeHandler.bind(this)
        this.editClickHandler = this.editClickHandler.bind(this)
        this.deleteClickHandler = this.deleteClickHandler.bind(this)
    }

    componentDidMount() {
        axios.get(this.state.url)
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

    editClickHandler(tweet) {
        this.setState({
            id: tweet._id,
            editTweet: tweet.content,
        });
    }

    deleteClickHandler(tweet) {
        axios.delete(this.state.url + tweet._id)
            .then(async () => {
                await axios.get(this.state.url)
                    .then(response => {
                        let tweets = response.data
                        this.setState({tweets})
                    })
            })
            .catch(error => console.log(error))
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
                            className='no-outline' 
                            onChange={this.entryInputChangeHandler} />  
                        <button onClick={this.entrySaveClickHandler}>Tweet</button>
                    </form>
                </div>
                <div>
                    {this.state.tweets.map((tweet, index) => 
                        <div key={index}>
                            <Tweets 
                                tweet={tweet}
                                id={this.state.id}
                                editTweet={this.state.editTweet}
                                editInputChangeHandler={this.editInputChangeHandler}
                                editClickHandler={this.editClickHandler}
                                deleteClickHandler={this.deleteClickHandler}
                                
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Twitter