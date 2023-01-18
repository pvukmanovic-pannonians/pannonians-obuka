import { Route, Routes as BaseRoutes } from 'react-router'
import LandingPage from './pages/LandingPage'
export default function Routes () {
    return (
        <BaseRoutes>
            <Route path='/' element={<LandingPage />}>Home</Route>
            <Route path='/login'></Route>
            <Route path='/about'></Route>
        </BaseRoutes>
    )
}