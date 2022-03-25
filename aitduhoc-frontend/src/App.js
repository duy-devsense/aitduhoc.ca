import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/scroll-to-top";
import Home from "./components/home/home.js";
import About from "./components/contact/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
