import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = useSelector(state => state.blog.posts)

  return (
    <div>
      <h3>Blog index</h3>
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
