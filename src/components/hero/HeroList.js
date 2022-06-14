import React from 'react'
import { getHeroByPublisher } from '../../selector/getHeroByPublisher'

export const HeroList = ({ publisher }) => {
    const heroes = getHeroByPublisher(publisher)
    return (
        <>
            <h1>Hero list - {publisher}</h1>
            <ul>
                {
                    heroes.map(hero => {
                        return <li key={hero.id}>{hero.superhero}</li>
                    })
                }
            </ul>
        </>
    )
}
