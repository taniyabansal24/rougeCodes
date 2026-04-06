import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;