import React from "react"
import SuperHero from "../components/SuperHero"
import superHeroData from "../superHeroData"

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    showCatchPhrase = (catchPhrase) => { alert(catchPhrase) }

    render() {
        const superHeros = superHeroData.map(superHero => <SuperHero
            key={superHero.id}
            superHero={superHero}
            showCatchPhrase={this.showCatchPhrase} />)
        return (
            <div>{superHeros}</div>
        )
    }
}

export default HeroList