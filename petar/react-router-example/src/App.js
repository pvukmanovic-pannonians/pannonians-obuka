import "./App.css";
import Routes from "./Routes";
import MainLayout from "./layouts/MainLayout";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <MainLayout>
        <Routes />
      </MainLayout>
    </>
  );
}

export default App;
