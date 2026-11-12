import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<ServicePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;