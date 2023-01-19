import { Route, Routes as BaseRoutes } from "react-router"; 
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

export default function Routes() {
    return (
        <BaseRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
        </BaseRoutes>
      );
};
