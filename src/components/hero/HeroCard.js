import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = (props) => {
    const { superhero, id, alter_ego } = props
    const imagePath = `../../assets/${id}.jpg`
    return (
        <div className='d-flex border rounded shadow mb-5 bg-body ' style={{ width: 450, height: 250 }} >
            <img style={{ width: 150 }} src={imagePath} alt='hero' />
            <div className='p-4 w-75 d-flex flex-column justify-content-center'>
                <h5>{superhero}</h5>
                <p>{alter_ego}</p>
                <Link to={`/hero/${id}`}>
                    Ver más
                </Link>
            </div>
        </div>
    )
}
