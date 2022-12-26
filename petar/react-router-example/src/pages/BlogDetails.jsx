import { useParams } from "react-router";
import useHttp from "../hooks/useHttp";

export default function BlogDetails() {
  const { id } = useParams();
  const { post } = useHttp('show', id);

  return (
    <div className="blog-details">
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}
