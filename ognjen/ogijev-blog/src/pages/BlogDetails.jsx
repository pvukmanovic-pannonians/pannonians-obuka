import { useParams } from 'react-router'
import useHttp from '../hooks/useHttp'

export default function BlogDetails() {
    const {id} = useParams()
    const { post } = useHttp(id)

    return (
        <div className="blogDetails">
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}