import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/Pages/Home";
import ProductPage from "@/Pages/ProductPage";
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";
import ContactSection from "./Pages/Contact";
import Necklaces from "./Pages/Necklaces";
import Earrings from "./Pages/Earrings";
import About from "./Pages/About";
import Bangels from "./Pages/Bangels";
import Anklets from "./Pages/Anklets";
import { FaArrowUp } from "react-icons/fa";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import PolicyPage from "./Pages/Policy";
import VideoPage from "./Pages/Video"
import Testimonial from "./Pages/Testimonial"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#A63C15] text-white p-3 rounded-full shadow-lg hover:bg-[#4e341b] transition duration-300"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}

function App() {
  return (
    <Router>
      <ClickSpark
        sparkColor="#a63c15"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/earrings" element={<Earrings />} />
            <Route path="/anklets" element={<Anklets />} />
            <Route path="/bangels" element={<Bangels />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/policys" element={<PolicyPage />} />
            <Route path="/videos" element={<VideoPage />} />
            <Route path="/Testimonial" element={<Testimonial/>}/>
          </Routes>
        </MainLayout>
        <Footer />
        <ScrollButton />
      </ClickSpark>
    </Router>
  );
}

export default App;
