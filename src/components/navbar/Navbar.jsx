import { FaLinkedin } from "react-icons/fa6";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navigation-container">
        <div className="navigation-wrapper">
          <ul className="links-container">
            <li className="navbar-list-item">
              <a href="#index" className="navbar-sections-link">
                Inicio
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#about" className="navbar-sections-link">
                Acerca de mí
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#services" className="navbar-sections-link">
                Servicios
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#portfolio" className="navbar-sections-link">
                Mi trabajo
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#contact" className="navbar-sections-link">
                Contacto
              </a>
            </li>
          </ul>
          <img src="/logo-portfolio.png" alt="logo" />
          <ul className="social-media-container">
            <li className="navbar-list-item">
              <a href="https://www.linkedin.com/in/fariasagustin3/" target="_blank" className="social-media-icons">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
  )
}
