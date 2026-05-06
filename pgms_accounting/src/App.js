import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/home';
import Aboutus from './pages/about_us/About_us';
import Services from './pages/service/services';
import  Contact from  './pages/contact/contact';
import StickyCTA from './components/StickyCTA/StickyCTA';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<Aboutus/>} />
        <Route path="/Service" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <StickyCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


