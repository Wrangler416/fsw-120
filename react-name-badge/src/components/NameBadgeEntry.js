import React from "react"
import Badges from "../components/Badges"

class NameBadgeEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            badges: [],
            firstName: '',
            lastName: ''
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
    }

    completed() {
        if (this.state.firstName 
            && this.state.lastName) {
            return true
        } else {
            return false
        }
    }

    render() {

        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "600px", 
                    border: "1px solid black", 
                    borderRadius: "5px"}}>
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
                                type="tel" 
                                pattern="[0-9]{10}" 
                                value={this.state.phone} 
                                name="phone" 
                                placeholder="Phone" 
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
                                rows={6} 
                                cols={56} 
                                value={this.state.about} 
                                name="about" 
                                placeholder="Tell us about yourself" 
                                onChange={this.handleClick} />
                        </div>

                        <div style={{textAlign: "center", padding: "10px"}}>
                            <button 
                                disabled={!this.completed()} 
                                onClick={this.handleClick}>Submit</button>
                        </div>
                    </form>
                    <div><Badges badges={this.state.badges} /></div>
                </div>
            </div>
            
        )
    }
}

export default NameBadgeEntry