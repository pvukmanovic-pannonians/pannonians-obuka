import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}
