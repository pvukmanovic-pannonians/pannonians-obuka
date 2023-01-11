import './App.css';
import Routes from './Routes';
import Navigation from './components/Navigation';
import Layout from './layouts/Layout';

function App() {
  return (
    <>
      <Navigation />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
