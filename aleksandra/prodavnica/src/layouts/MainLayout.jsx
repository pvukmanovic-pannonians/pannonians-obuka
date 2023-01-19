import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">{children}</div>
    </div>
  );
};
