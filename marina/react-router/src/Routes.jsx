import { Route, Routes as BaseRoutes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </BaseRoutes>
  );
}
