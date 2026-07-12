import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActionButtons from './components/layout/FloatingActionButtons';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import VisitUs from './pages/VisitUs';
import Contact from './pages/Contact';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/visit-us" element={<VisitUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </main>

      <Footer />
      <FloatingActionButtons />
    </BrowserRouter>
  );
}
