import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes as BaseRoutes } from "react-router";
import useHttp from "./hooks/useHttp";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
import { addComments, addUsers } from "./store/features/blog";

export default function Routes() {
  const dispatch = useDispatch()
  useHttp()

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const promises = [
      axios.get("https://jsonplaceholder.typicode.com/comments"),
      axios.get("https://jsonplaceholder.typicode.com/users"),
    ];

    const [{ data: commentsData }, { data: usersData }] = await Promise.all(
      promises
    );

    dispatch(addUsers(usersData))
    dispatch(addComments(commentsData))
  }
  
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </BaseRoutes>
  );
}
