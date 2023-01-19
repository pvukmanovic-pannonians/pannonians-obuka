import "./App.css";
import Navbar from "./component/Navbar";
import MainLayout from "./layouts/MainLayout";
import Routes from "./Routes";
import { store } from "./store/";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <MainLayout>
        <Routes />
      </MainLayout>
    </Provider>
  );
}

export default App;
