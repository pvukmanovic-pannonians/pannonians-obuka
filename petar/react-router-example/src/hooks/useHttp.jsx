import axios from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../http/client";

export default function useHttp(crudOperation = 'index', postId = null) {
  const [posts, setPosts] = useState();
  const [post, setPost] = useState();
  const [postLength, setPostLength] = useState(0);
  useEffect(() => {
    axios.get(endpoints.INDEX).then(({ data }) => {
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    if (post) {
      setPostLength(post.body.length);
    }
  }, [post]);

  useEffect(() => {
    if (postLength !== 0)
      console.log(`This post has ${postLength} characters!`);
    // zamislimo da ovde radimo neku internu logiku,
    // tipa analitiku
  }, [postLength]);

  useEffect(() => {
    if (postId) fetchSinglePost();
  }, [postId]);

  const fetchSinglePost = async () => {
    const { data } = await axios.get(endpoints.SHOW(postId));
    setPost(data);
  };

  return {
    posts,
    post,
  };
}
