import React from "react"
import SuperHero from "../components/SuperHero"
import superHeroData from "../superHeroData"

function HeroList() {
    const superHeros = superHeroData.map(superHero => <SuperHero
        key={superHero.id}
        name={superHero.name}
        imageName={superHero.imageName} />)

    return (
        <div>{superHeros}</div>
    )
}

export default HeroList