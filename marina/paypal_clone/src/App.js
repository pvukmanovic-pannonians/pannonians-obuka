import "./App.css";
import Layout from "./layouts/main";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
  return (

    <Layout>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  )
}

export default App;
