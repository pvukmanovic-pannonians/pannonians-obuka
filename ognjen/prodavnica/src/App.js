import './App.css';
import MainLayout from './layout/MainLayout';
import Routes from './Routes';
import NavigatioBar from './components/NavigationBar'
import { Provider } from 'react-redux';
import { store } from './store/store'

function App() {
  return (
    <>
     <Provider store={store}>
      <NavigatioBar />
        <MainLayout>
          <Routes></Routes>
        </MainLayout>
      </Provider>
    </>   
  );
}

export default App;
