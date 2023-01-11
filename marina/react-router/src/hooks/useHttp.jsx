import axios from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../http/client";

export default function useHttp(crudOperation = 'index', postId = null) {
  const [posts, setPosts] = useState();
  const [post, setPost] = useState();
  useEffect(() => {
    axios.get(endpoints.INDEX).then(({ data }) => {
      setPosts(data.slice(0, 10));
    });
  }, []);

 
  useEffect(() => { 
   if (postId) fetchSinglePost();
 }, [postId]);

 const fetchSinglePost = async () => {
    const { data } = await axios.get(
        endpoints.SHOW(postId)
        );
        setPost(data);
  };

return {
    posts,
    post
  };
}
