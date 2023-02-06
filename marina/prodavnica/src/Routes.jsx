import { Route, Routes as BaseRoutes } from "react-router";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </BaseRoutes>
  );
}
