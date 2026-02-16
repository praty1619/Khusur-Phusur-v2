import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./sections/Hero/hero";
import PersonalSection from "./sections/personalSection/personalSection";
import DetailsSection from "./sections/Details/Details";
import FabNavbar from "./components/Navbar/fabNavbar";
import Gallery from "./sections/gallery/Gallery";
import Contact from "./sections/Contact/Contact";
import Videos from "./sections/Hero/videos";
import Articles from "./sections/Articles/Articles";
import ArticleRead from "./sections/Articles/ArticleRead";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div className="texture-layer" />
            <FabNavbar />
            <div className="app-main">
              <main>

                <section id="home">
                  <Hero />
                </section>

                <PersonalSection />

                <DetailsSection />

                <section id="gallery">
                  <Gallery />
                </section>

                <section id="contact">
                  <Contact />
                </section>

              </main>
            </div>
          </>
        }/>
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleRead />} />
        <Route path="/reviews" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
