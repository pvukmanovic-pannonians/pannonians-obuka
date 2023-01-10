import { Link} from 'react-router-dom'
import useHttp from '../hooks/useHttp'

export default function Blog () {
    const { posts } = useHttp('index')
    return (
        <div className='blogDetails'>
            <h3>Blog index</h3>
            {posts && (
                <>
                    <ul>
                       {posts.map((post) => (
                        <li key={post.id}><Link to={`/blog/${post.id}`}>{post.title}</Link></li>
                       ))}
                    </ul>
                </>
            )}
        </div>
    )
}