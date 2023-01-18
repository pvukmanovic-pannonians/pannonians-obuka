import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function NavigationBar () {
    const user = useSelector(state => state.users.user)
    return (
        <nav className="navigationBar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>Login</Link></li>
                {user && (<div className="userProfile">
                    <div className="userAvatar">
                        <img src={user.data.image} alt="" className="avatarImage" />
                    </div>
                    <div>
                        <span>{user.data.firstName} {user.data.lastName}</span>
                    </div>
                </div>)}
            </ul>
        </nav>
    )
}