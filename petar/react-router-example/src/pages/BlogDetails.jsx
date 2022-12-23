import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../http/client";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${API_URL}/posts/${id}`
    );
    setPost(data);
  };
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
