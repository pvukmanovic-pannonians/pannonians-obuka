import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Comment from "../components/Comment";
import useHttp from "../hooks/useHttp";

export default function BlogDetails() {
  const { id } = useParams();
  const { post } = useHttp("show", id);
  const comments = useSelector((state) => state.blog.comments)?.[id]
  const user = useSelector((state) => state.blog.users)?.find((u) => post?.userId === u.id)

  return (
    <div className="blog-details">
      {post && (
        <>
          {user && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <h1>Comments</h1>
          {comments &&
            comments.map((comment) => (
              <Comment
                key={comment.id}
                body={comment.body}
                email={comment.email}
                name={comment.name}
              />
            ))}
        </>
      )}
    </div>
  );
}
