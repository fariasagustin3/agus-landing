import "./about.css";
import { FaCode, FaServer } from "react-icons/fa6";
import { BiPaint } from "react-icons/bi";
import Video from "../../assets/presentation-video.mp4";

export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-wrapper">
        <div className="title-container">
          <h1>¿Quién soy?</h1>
          <h2>
            Soy Agustín Farias, apasionado desarrollador web con experiencia llevando un modelo de negocio
            sin presencia en línea a destacar en los buscadores con su presencia en la web
          </h2>
        </div>
        <div className="cards-container">
          <div className="card-item">
            <FaCode style={{ color: "#2091F9", width: 60}} />
            <h3>Desarrollo Web</h3>
            <p>
              Convierto tu sueño en un negocio digital rentable por medio de la magia de la codificación,
              utilizando la tecnología que mejor se ajusta a tus necesidades
            </p>
          </div>
          <div className="card-item">
            <BiPaint style={{ color: "#2091F9", width: 60}} />
            <h3>Diseño Web</h3>
            <p>
              Si no contás con un diseño para tu aplicación, mi experiencia como desarrollador Frontend y formación
              inclinada al diseño de interfaces de usuario harán de tu negocio todavía más escalable
            </p>
          </div>
          <div className="card-item">
            <FaServer style={{ color: "#2091F9", width: 60}} />
            <h3>Servidores y Bases de Datos</h3>
            <p>
              Planificación y desarrollo de aplicaciones a nivel backend y bases de datos con alto enfoque en
              la escalabilidad de las mismas
            </p>
          </div>
        </div>

        {/* video */}
        <div className="video-container">
          <video src={Video} controls className="video"></video>
        </div>
      </div>
    </section>
  );
}
