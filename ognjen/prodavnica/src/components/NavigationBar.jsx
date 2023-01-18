import { Link } from "react-router-dom"
export default function NavigationBar () {
    return (
        <nav className="navigationBar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    )
}