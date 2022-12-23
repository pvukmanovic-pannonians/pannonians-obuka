import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../http/client";

export default function Blog() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get(`${API_URL}/posts`).then(({ data }) => {
      setPosts(data.slice(0, 10));
    });
  }, []);
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
