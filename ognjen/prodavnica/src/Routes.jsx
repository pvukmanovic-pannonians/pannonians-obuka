import { Route, Routes as BaseRoutes } from 'react-router';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios'
import { addUsers } from './store/features/users'

export default function Routes () {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData () {
        const { data: usersData } = await axios.get('https://dummyjson.com/users')
        console.log('data', usersData);
        dispatch(addUsers(usersData.users))
    }

    return (
        <BaseRoutes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
        </BaseRoutes>
    )
}