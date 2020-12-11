import React from "react"
import Badges from "../components/Badges"

class NameBadgeEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            badges: [],
            firstName: '',
            lastName: '',
            email: '', 
            birthPlace: '',
            phone: '',
            favFood: '',
            about: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        event.preventDefault()

        let badgeEntry = {
            firstName: this.state.firstName,
            lastName: this.state.lastName, 
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phone: this.state.phone,
            favFood: this.state.favFood,
            about: this.state.about
        }

        this.setState({
            badges: [...this.state.badges, badgeEntry]
        })

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            about: ''
        })
    }

    validPhone(num) {
        let validPhone = '([0-9]{10})'
        if (num !== '') {
            return num.match(validPhone) ? true : false
        } else {
            return true
        }
        
    }

    completed() {
        if (this.state.firstName.length >=3 
            && this.state.lastName.length >=3 
            && this.state.email.length >=3 
            && this.state.birthPlace.length >=3 
            && this.state.phone.length >=3 
            && this.state.favFood.length >=3 
            && this.state.about.length >=3) {
            return true
        } else {
            return false
        }
    }

    render() {

        const phoneError = !this.validPhone(this.state.phone)

        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <div style={{width: "600px", 
                        border: "1px solid black",
                        borderRadius: "5px",
                        padding: "10px"}}>
                        <h3>Name Badge Entry</h3>
                        <form>
                        <div style={{textAlign: "center", padding: "10px"}}>
                            <input 
                                type="text" 
                                value={this.state.firstName} 
                                name="firstName" 
                                placeholder="First Name" 
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                className="right_column" 
                                value={this.state.lastName} 
                                name="lastName" 
                                placeholder="Last Name" 
                                onChange={this.handleChange} />
                        </div>
                        <div style={{textAlign: "center", padding: "10px"}}>
                            <input 
                                type="email" 
                                value={this.state.email} 
                                name="email" 
                                placeholder="Email" 
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                className="right_column" 
                                value={this.state.birthPlace} 
                                name="birthPlace" 
                                placeholder="Place of Birth" 
                                onChange={this.handleChange} />
                        </div>
                        <div style={{textAlign: "center", padding: "10px"}}>
                            <input 
                                className={phoneError ? "phone_error" : ''}
                                type="tel" 
                                value={this.state.phone} 
                                name="phone" 
                                placeholder="Phone (10 numbers only)" 
                                onChange={this.handleChange} />
                            <input 
                                type="text" 
                                className="right_column" 
                                value={this.state.favFood} 
                                name="favFood" 
                                placeholder="Favorite Food" 
                                onChange={this.handleChange} />
                        </div>
                        <div style={{textAlign: "center"}}>
                            <textarea 
                                style={{resize: "none"}}
                                rows={6} 
                                cols={56} 
                                value={this.state.about} 
                                name="about" 
                                placeholder="Tell us about yourself" 
                                onChange={this.handleChange} />
                        </div>
                        <div style={{textAlign: "center", padding: "10px"}}>
                            <button 
                                disabled={!this.completed() || phoneError} 
                                onClick={this.handleClick}>Submit</button>
                        </div>
                    </form>
                    </div>
                    <div><Badges badges={this.state.badges.reverse()} /></div>
                </div>
            </div>
        )
    }
}

export default NameBadgeEntry