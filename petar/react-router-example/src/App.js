import "./App.css";
import { store } from './store/store'
import Routes from "./Routes";
import MainLayout from "./layouts/MainLayout";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <MainLayout>
        <Routes />
      </MainLayout>
    </Provider>
  );
}

export default App;
