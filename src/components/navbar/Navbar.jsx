import { FaLinkedin } from "react-icons/fa6";
import "./navbar.css";
// import { useState } from "react";
// import Modal from 'react-modal'

// const customStyles = {
//   content: {
//     top: -50,
//     right: 0,
//     left: "100%",
//     bottom: "auto",
//     marginTop: 200,
//     transform: 'translate(-50%, -50%)',
//     width: '100%'
//   },
// };

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <nav className="navigation-container">
      <div className="navigation-wrapper">
        <ul className="links-container">
          <li className="navbar-list-item">
            <a href="#index" className="navbar-sections-link">
              Index
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#about" className="navbar-sections-link">
              About Me
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#services" className="navbar-sections-link">
              Services
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#portfolio" className="navbar-sections-link">
              My work
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#contact" className="navbar-sections-link">
              Contact
            </a>
          </li>
        </ul>
        <img src="/logo-portfolio.png" alt="logo" />
        {/* <svg onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="navigation-menu">
          <path className="navigation-menu" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg> */}
        <ul className="social-media-container">
          <li className="navbar-list-item">
            <a href="https://www.linkedin.com/in/fariasagustin3/" target="_blank" className="social-media-icons">
              <FaLinkedin />
            </a>
          </li>
        </ul>
        {/* {open && (
          <Modal isOpen={open} onRequestClose={() => setOpen(false)} style={customStyles}>
            <button className="modal-button">X</button>
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
          </Modal>
        )} */}
      </div>
    </nav>
  )
}
