import { useParams } from 'react-router-dom'
import { getHeroById } from '../../selector/getHeroById'
export const HeroScreen = () => {
    const { heroId } = useParams()
    const hero = getHeroById(heroId)
    return (
        <div>
            <h1>
                {hero.superhero}
            </h1>
        </div>
    )
}
