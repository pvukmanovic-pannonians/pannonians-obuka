export default function BlogCard (post) {
    console.log('post', post);
    return (
        <div className="" style={{height: '100%', border: '1px solid #333', margin: '10px 0'}}>
           <p style={{fontSize: '20px', padding: '0 20px'}}>{post.post.title}</p>
           <p style={{fontSize: "14px", padding: '0 20px'}}>{post.post.body}</p> 
        </div>
    )
}