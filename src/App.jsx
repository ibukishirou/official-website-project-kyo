import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Talent pages
import TalentHome from './pages/talent/Home';
import Profile from './pages/talent/Profile';
import Events from './pages/talent/Events';
import Guidelines from './pages/talent/Guidelines';
import QA from './pages/talent/QA';
import Contact from './pages/talent/Contact';

// Works pages
import WorksHome from './pages/works/WorksHome';
import WorksCommission from './pages/works/Commission';
import WorksPortfolio from './pages/works/Portfolio';

import './styles/global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Root redirect to talent */}
          <Route path="/" element={<Navigate to="/talent" replace />} />
          
          {/* Talent routes */}
          <Route path="/talent" element={<TalentHome />} />
          <Route path="/talent/profile" element={<Profile />} />
          <Route path="/talent/events" element={<Events />} />
          <Route path="/talent/guidelines" element={<Guidelines />} />
          <Route path="/talent/qa" element={<QA />} />
          <Route path="/talent/contact" element={<Contact />} />
          
          {/* Works routes */}
          <Route path="/works" element={<WorksHome />} />
          <Route path="/works/commission" element={<WorksCommission />} />
          <Route path="/works/portfolio" element={<Navigate to="/works/portfolio/basic" replace />} />
          <Route path="/works/portfolio/:plan" element={<WorksPortfolio />} />

          {/* Legacy redirects for backward compatibility */}
          <Route path="/profile" element={<Navigate to="/talent/profile" replace />} />
          <Route path="/events" element={<Navigate to="/talent/events" replace />} />
          <Route path="/guidelines" element={<Navigate to="/talent/guidelines" replace />} />
          <Route path="/qa" element={<Navigate to="/talent/qa" replace />} />
          <Route path="/contact" element={<Navigate to="/talent/contact" replace />} />
          <Route path="/commission" element={<Navigate to="/works/commission" replace />} />
          <Route path="/portfolio" element={<Navigate to="/works/portfolio" replace />} />
          <Route path="/portfolio/:plan" element={<Navigate to="/works/portfolio/:plan" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
