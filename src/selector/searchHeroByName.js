import { heroes } from "../data/heroes"

export const searchHeroByName = (name) => {
    console.log('Api')
    name = name.toLowerCase()
    if (name) {
        return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
    } else {
        return []
    }
}