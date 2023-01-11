import "./App.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";


function App() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Routes />
      </MainLayout>
    </>
  );
}

export default App;
