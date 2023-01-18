import './App.css';
import MainLayout from './layout/MainLayout';
import Routes from './Routes';
import NavigatioBar from './components/NavigationBar'

function App() {
  return (
    <>
      <NavigatioBar />
      <MainLayout>
        <Routes></Routes>
      </MainLayout>
    </>   
  );
}

export default App;
