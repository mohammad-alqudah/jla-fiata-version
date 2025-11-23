import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllNews from './pages/AllNews';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import JobSeekerProfile from './pages/JobSeekerProfile';
import OrganizationProfile from './pages/OrganizationProfile';

import About from './pages/About';

import FiataHome from './pages/fiata/FiataHome';
import AboutFiata from './pages/fiata/AboutFiata';
import JlaMember from './pages/fiata/JlaMember';
import DiplomaPrograms from './pages/fiata/DiplomaPrograms';
import DiplomaDetails from './pages/fiata/DiplomaDetails';
import Faqs from './pages/fiata/Faqs';
import Experts from './pages/fiata/Experts';
import DiplomaHolders from './pages/fiata/DiplomaHolders';
import IndustryUpdates from './pages/fiata/IndustryUpdates';
import MediaCentre from './pages/fiata/MediaCentre';
import Contact from './pages/fiata/Contact';




function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job-seeker-profile" element={<JobSeekerProfile />} />
          <Route path="/organization-profile" element={<OrganizationProfile />} />

          <Route path="/fiata" element={<FiataHome />} />
          <Route path="/fiata/about" element={<AboutFiata />} />
          <Route path="/fiata/jla-member" element={<JlaMember />} />
          <Route path="/fiata/programs" element={<DiplomaPrograms />} />
          <Route path="/fiata/diploma-details" element={<DiplomaDetails />} />
          <Route path="/fiata/faqs" element={<Faqs />} />
          <Route path="/fiata/experts" element={<Experts />} />
          <Route path="/fiata/holders" element={<DiplomaHolders />} />
          <Route path="/fiata/updates" element={<IndustryUpdates />} />
          <Route path="/fiata/media" element={<MediaCentre />} />
          <Route path="/fiata/contact" element={<Contact />} />
        </Routes>
      </Router>
    
  );
}

export default App;
