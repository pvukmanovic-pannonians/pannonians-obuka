import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <nav className='nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </ul>
        </nav>
    )
}