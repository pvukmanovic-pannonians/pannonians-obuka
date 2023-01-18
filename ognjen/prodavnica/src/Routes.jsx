import { Route, Routes as BaseRoutes } from 'react-router';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

export default function Routes () {
    return (
        <BaseRoutes>
            <Route path="/" element={<LandingPage />}>Home</Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
        </BaseRoutes>
    )
}