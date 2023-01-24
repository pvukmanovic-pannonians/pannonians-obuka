import "./App.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Routes />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
