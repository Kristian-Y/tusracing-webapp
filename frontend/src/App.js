// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme-manager/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about-us/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";
import GoUpButton from "./components/up-button/GoUpButton.jsx";
import "./index.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="pt-16"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        <GoUpButton />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;