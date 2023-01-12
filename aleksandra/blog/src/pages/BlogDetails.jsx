import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useHttp from "../hooks/useHttp";

export default function BlogDetails() {
  const { id } = useParams();
  const { post } = useHttp('show', id);
  const [comments, setComments] = useState();
  const [user, setUser] = useState();

  useEffect( () => {
    if (post) {
      fetchData();
    }
  }, [post]);

  async function fetchData() {
    const promises = [
      axios.get('https://jsonplaceholder.typicode.com/comments'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ]

    const [{data: commentsData}, {data: usersData}] = await Promise.all(promises);

    setComments(commentsData.filter((c) => c.postId === post.id));
    setUser(usersData.find((u) => post.userId === u.id));
    
    //setUser(usersData.find((u) => post.userId === u.id));
  }

  return (
    <div className="blog-details">
      {post && (
        <>
          {user && (
            <div>
              <p>Username: {user.username}</p>
              <p>E-mail: {user.email}</p>
            </div>
          )}
          <h1 className="blog-title">{post.title}</h1>
          <h3>{post.body}</h3>
          <h4>Comments:</h4>
          {comments && (
            comments.map((comment) => (
              <div>
                <div className="com-name">{comment.name}</div>
                <div className="com-body">{comment.body}</div>
                <div className="com-email">{comment.email}</div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}
