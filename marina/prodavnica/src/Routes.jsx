import { Route, Routes as BaseRoutes } from "react-router";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Store from "./pages/Store";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/store" element={<Store />} />
    </BaseRoutes>
  );
}
