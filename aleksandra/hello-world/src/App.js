import "./App.css";
import Hero from "./components/Hero";
import Layout from "./layouts/main";
import PanelOne from "./components/PanelOne";
import PanelTwo from "./components/PanelTwo";
import PanelThree from "./components/PanelThree";
import PanelFour from "./components/PanelFour";

function App() {
  return (
    <Layout>
        <Hero />
        <PanelOne />
        <PanelTwo />
        <PanelThree />
        <PanelFour />
    </Layout>
  );
}

export default App;
