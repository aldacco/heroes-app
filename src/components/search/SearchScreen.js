import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchHeroByName } from '../../selector/searchHeroByName'
import { HeroCard } from '../hero/HeroCard'
import queryString from 'query-string'
export const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const [searchValue, setSearchValue] = useState(q)
    const herofitered = useMemo(() => searchHeroByName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`?q=${searchValue}`)
    }
    return (
        <div>
            <h1>
                Search hero
            </h1>
            <hr />
            <div className='row'>
                <div className='col-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>

                            <input
                                type='text'
                                className='form-control'
                                placeholder='Search'
                                onChange={(event) => setSearchValue(event.target.value)}
                            />
                            <button
                                className='btn btn-primary'
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-9'>
                    <div className='row row-cols-3'>
                        {
                            herofitered.map(hero =>
                                <div key={hero.id}>
                                    <HeroCard  {...hero} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
