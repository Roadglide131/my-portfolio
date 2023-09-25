import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/about-me/AboutMe";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
function App() {
  return (
    <Flex direction="column" flex="1" style={{ minHeight: "100vh" }}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </Flex>
  );
}

export default App;
