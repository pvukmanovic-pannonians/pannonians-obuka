import {Route, Routes as BaseRoute} from 'react-router' 
import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'

export default function Routes () {
    return (
        <BaseRoute>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog/:id' element={<BlogDetails />}></Route>
        </BaseRoute>
    )
}