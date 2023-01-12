import "./App.css";
import Routes from "./Routes";
import MainLayout from "./layouts/MainLayout";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <MainLayout>
        <Routes />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;