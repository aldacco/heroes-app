import React from 'react'
import { getHeroByPublisher } from '../../selector/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = getHeroByPublisher(publisher)
    return (
        <>
            <div className='d-flex flex-wrap justify-content-between align-content-between'>
                {
                    heroes.map(hero =>
                        <HeroCard key={hero.id} {...hero} />
                    )
                }
            </div>
        </>
    )
}
