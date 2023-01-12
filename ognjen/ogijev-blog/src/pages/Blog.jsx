import { Link} from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import useHttp from '../hooks/useHttp'

export default function Blog () {
    const { posts } = useHttp('index')
    return (
        <div className='blogDetails'>
            <h3>Blog index</h3>
            {posts && (
                <>
                    { posts && posts.map((post) => (
                        <div className='flex-row' style={{height: '150px'}} key={post.id}>
                            <Link to={`/blog/${post.id}`} style={{textDecoration: 'none', color: '#333'}}>
                                    <BlogCard post={post}></BlogCard>
                                </Link>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}