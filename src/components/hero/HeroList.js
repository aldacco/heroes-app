import React from 'react'
import { getHeroByPublisher } from '../../selector/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = getHeroByPublisher(publisher)
    return (
        <>
            <div className='row row-cols-4'>
                {
                    heroes.map(hero =>
                        <div className='col' key={hero.id}>
                            <HeroCard {...hero} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
