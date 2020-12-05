import React from 'react'
import axios from 'axios'
import Entry from './Entry'
import Tweets from '../components/Tweets'

class Twitter extends React.Component {
    constructor() {
        super()
        this.state = {
            url: 'https://api.vschool.io/toddpolak-fsw-120/todo/',
            tweets: [],
            id: '',
            author: 'Todd Polak @polaktodd',
            tweet: '',
            editTweet: ''
        }
        this.entryInputChangeHandler = this.entryInputChangeHandler.bind(this)
        this.entrySaveClickHandler = this.entrySaveClickHandler.bind(this)
        this.editInputChangeHandler = this.editInputChangeHandler.bind(this)
        this.editClickHandler = this.editClickHandler.bind(this)
        this.deleteClickHandler = this.deleteClickHandler.bind(this)
        this.editSaveClickHandler = this.editSaveClickHandler.bind(this)
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
        event.preventDefault()

        axios.post(this.state.url, {
            title: this.state.author,
            description: this.state.tweet
        })
        .then(async () => {
            await axios.get(this.state.url)
                .then(response => {
                    let tweets = response.data
                    this.setState({tweets})
                    this.setState({
                        tweet: ''
                    })
                })
        })
    }

    editInputChangeHandler(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    editClickHandler(tweet) {
        this.setState({
            id: tweet._id,
            editTweet: tweet.description
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

    editSaveClickHandler(event) {
        axios.put(this.state.url + event.target.id, {
            title: this.state.editTweet
        })
        .then(async () => {
            await axios.get(this.state.url)
                .then(response => {
                    let tweets = response.data
                    this.setState({tweets})
                    this.setState({id: ''})
                })
        })
    }

    editCancelClickHandler() {
        this.setState({id: ''})
    }

    render() {
        return (
            <div>
                <Entry 
                    tweet={this.state.tweet}
                    entryInputChangeHandler={this.entryInputChangeHandler}
                    entrySaveClickHandler={this.entrySaveClickHandler}
                />
                {this.state.tweets.map((tweet, index) => 
                    <div key={index}>
                        <Tweets 
                            tweet={tweet}
                            id={this.state.id}
                            editTweet={this.state.editTweet}
                            editInputChangeHandler={this.editInputChangeHandler}
                            editClickHandler={this.editClickHandler}
                            deleteClickHandler={this.deleteClickHandler}
                            editSaveClickHandler={this.editSaveClickHandler}
                            editCancelClickHandler={this.editClickHandler}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Twitter