import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Guidelines from './pages/Guidelines';
import QA from './pages/QA';
import Commission from './pages/Commission';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
