import { Route, Routes as BaseRoutes } from 'react-router'
import About from './pages/About';
import Home from './pages/Home';

export default function Routes() {
    return (
      <BaseRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </BaseRoutes>
    );
  }
  