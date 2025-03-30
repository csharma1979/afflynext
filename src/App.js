import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import EmailMarketing from './components/services/EmailMarketing';
import MobileMarketing from './components/services/MobileMarketing';
import SocialMediaMarketing from './components/services/SocialMediaMarketing';
import SearchAdvertising from './components/services/SearchAdvertising';
import AffiliateMarketing from './components/services/AffiliateMarketing';
import NativeAdvertising from './components/services/NativeAdvertising';
import SmsMarketing from './components/services/SmsMarketing';
import DisplayAdvertising from './components/services/DisplayAdvertising';
import VideoAdvertising from './components/services/VideoAdvertising';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
// Add this import at the top with other imports
import TermsConditions from './components/TermsConditions';

// Create a ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/mobile-marketing" element={<MobileMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/search-advertising" element={<SearchAdvertising />} />
          <Route path="/services/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/services/native-advertising" element={<NativeAdvertising />} />
          <Route path="/services/sms-marketing" element={<SmsMarketing />} />
          <Route path="/services/display-advertising" element={<DisplayAdvertising />} />
          <Route path="/services/video-advertising" element={<VideoAdvertising />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
