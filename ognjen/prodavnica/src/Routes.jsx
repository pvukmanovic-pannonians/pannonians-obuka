import { Route, Routes as BaseRoutes } from 'react-router'
export default function Routes () {
    return (
        <BaseRoutes>
            <Route path='/'>Home</Route>
            <Route path='/login'></Route>
            <Route path='/about'></Route>
        </BaseRoutes>
    )
}