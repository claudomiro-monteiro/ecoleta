import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { CreatPoint } from './pages/CreatePoint'
import { Home } from './pages/Home'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create-point' element={<CreatPoint />} />
            </Routes>
        </BrowserRouter>
    )
}
