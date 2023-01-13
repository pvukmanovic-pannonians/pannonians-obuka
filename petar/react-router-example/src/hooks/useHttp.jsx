import axios from "axios";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { endpoints } from "../http/client";
import { addPosts } from "../store/features/blog";

export default function useHttp(crudOperation = "index", postId = null) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  useEffect(() => {
    if (posts.length === 0)
      axios.get(endpoints.INDEX).then(({ data }) => {
        dispatch(addPosts(data));
      });
  }, [posts, dispatch]);

  const post = useMemo(() => {
    return posts.find((p) => p.id === parseInt(postId, 10))
  }, [postId, posts]);

  return {
    posts,
    post,
  };
}
