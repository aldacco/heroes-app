import { NavLink, useParams } from 'react-router-dom'
import { getHeroById } from '../../selector/getHeroById'
export const HeroScreen = () => {
    const { heroId } = useParams()
    const hero = getHeroById(heroId)
    const imagePath = `../../assets/${hero.id}.jpg`

    return (
        <div className='d-flex'>
            <div className='m-5'>
                <img className='rounded' src={imagePath} />
            </div>
            <div className='card h-50 p-5 m-5'>
                <h3>{hero.superhero}</h3>
                <h4 className='text-muted'>{hero.publisher}</h4>
                <p><b>Alter ego: </b> {hero.alter_ego}</p>
                <p><b>Characters: </b> {hero.characters}</p>
                <p><b>First appearance: </b> {hero.first_appearance}</p>

                <NavLink to={hero.publisher == 'Marvel Comics' ? '/marvel' : '/dc'}>
                    <button className='btn btn-primary'>
                        Regresar
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
