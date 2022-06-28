import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Home } from '../components/ui/Home'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className='p-3'>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/marvel' element={<MarvelScreen />} />
                <Route path='/dc' element={<DcScreen />} />
                <Route path='/search' element={<SearchScreen />} />
                <Route path='/hero/:heroId' element={<HeroScreen />} />

            </Routes>
            </div>
        </>
    )
}
