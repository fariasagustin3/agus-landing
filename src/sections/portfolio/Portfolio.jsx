import "./portfolio.css";
import Furniro from "../../assets/furniro-header.png";
import Landing from "../../assets/landing-sparkify-project.png";
import EpicStore from "../../assets/epic-store-project.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-container">
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Projects</h1>
        <p className="portfolio-subtitle">
          Experience in developing custom applications is my best way to demonstrate that the 
          quality of my services matters as much as human quality, as efficient communication 
          with the client makes projects like these possible.
        </p>
        <div className="portfolio-carousel-container">
          <a href="https://furniro-shop-ten.vercel.app/" target="_blank" className="portfolio-project-item">
            <img src={Furniro} alt="" />
            <span className="portfolio-project-description">E-commerce website tailored to the needs of an online furniture sales business.</span>
            <div className="portfolio-project-texts">
              <h3>Furniro</h3>
              <span>Ecommerce</span>
            </div>
          </a>
          <a href="https://sparkify-dev.vercel.app/" target="_blank" className="portfolio-project-item">
            <img src={Landing} alt="" />
            <span className="portfolio-project-description">Professional landing page tailored for mobile phones developed with React.js and TailwindCSS.</span>
            <div className="portfolio-project-texts">
              <h3>Sparkify</h3>
              <span>Landing Page</span>
            </div>
          </a>
          <a href="https://agustore.vercel.app/" target="_blank" className="portfolio-project-item">
            <img src={EpicStore} alt="" />
            <span className="portfolio-project-description">E-commerce website dedicated to selling products ranging from clothing to stationery items.</span>
            <div className="portfolio-project-texts">
              <h3>Epic Store</h3>
              <span>E-Commerce</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
