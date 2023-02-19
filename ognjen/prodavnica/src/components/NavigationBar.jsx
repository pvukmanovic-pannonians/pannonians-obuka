// import { useSelector } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ShoppingCart from "./ShoppingCart"
export default function NavigationBar () {
    // const user = useSelector(state => state.users.user)
    const user = useSelector(state => state.users.user)
    return (
        <nav className="navigationBar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to="/store" style={!user.id ? {pointerEvents: 'none'} : {}}>Store</Link></li>
                <ShoppingCart></ShoppingCart>
            </ul>
            
        </nav>
    )
}