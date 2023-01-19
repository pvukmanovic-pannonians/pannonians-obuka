import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Routes from "./Routes";
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Provider>
  );
}

export default App;
