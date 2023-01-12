import { Link } from "react-router-dom";
import useHttp from "../hooks/useHttp";

export default function Blog() {
  const { posts } = useHttp();

  return (
    <div className="blog">
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