import './App.css';
import Layout from './layouts/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Layout></Layout>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <Footer></Footer>
    </> 
  )
}

export default App;
