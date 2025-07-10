import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Aboutus from './pages/about_us/About_us';
import Services from './pages/service/services';
import  Contact from  './pages/contact/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<Aboutus/>} />
        <Route path="/Service" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;


