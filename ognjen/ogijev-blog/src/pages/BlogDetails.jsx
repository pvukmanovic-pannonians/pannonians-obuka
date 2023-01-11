import { useParams } from 'react-router'
import useHttp from '../hooks/useHttp'

export default function BlogDetails() {
    const {id} = useParams()
    const { post } = useHttp(id)
    const { comments } = useHttp()
    // const qwe = comments.filter(c => c.postId === post.id)
    // console.log('qwe', qwe);
    return (
        <div className="blogDetails">
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.body}</p>
                    <p>{post.body}</p>
                    <p>{post.body}</p>
                    <h3 className='commentHeader'>Comments</h3>
                    <hr className='hr' />
                    {comments && comments.filter(c => c.postId === post.id).map(m => (
                        <div key={m.id} className="comment">
                            <h4 className='commentTitle'>{m.name}</h4>
                            <article className='commentBody'>{m.body}</article>
                            <p className='commentEmail'>{m.email}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}