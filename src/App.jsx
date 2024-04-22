import { useEffect, useState } from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import IndexSection from "./sections/index/IndexSection";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";

function App() {
  return (
    <main>
      {/* navigation bar */}
      <Navbar />

      {/* index section */}
      <IndexSection />

      {/* about section */}
      <About />

      {/* services section */}
      <Services />

      {/* portfolio */}
      <Portfolio />

      {/* contact */}
      <Contact />
    </main>
  );
}

export default App;
