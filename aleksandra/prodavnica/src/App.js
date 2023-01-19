import "./App.css";
import Routes from "./Routes";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Routes />
      </MainLayout>
    </>
  );
}

export default App;
