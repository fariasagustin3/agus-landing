import "./about.css";
import { FaCode, FaServer } from "react-icons/fa6";
import { BiPaint } from "react-icons/bi";
import Video from "../../assets/presentation-video.mp4";

export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-wrapper">
        <div className="title-container">
          <h1>Who am I?</h1>
          <h2>
            I am Agustín Farias, a passionate web developer with experience in taking a business model with no online presence to stand out in search engines through its web presence.
          </h2>
        </div>
        <div className="cards-container">
          <div className="card-item">
            <FaCode style={{ color: "#2091F9", width: 60 }} />
            <h3>Web Development</h3>
            <p>
              I turn your dream into a profitable digital business through the magic of coding, using the technology that best fits your needs.
            </p>
          </div>
          <div className="card-item">
            <BiPaint style={{ color: "#2091F9", width: 60 }} />
            <h3>Web Design</h3>
            <p>
              If you don't have a design for your application, my experience as a Frontend developer and my training focused on user interface design will make your business even more scalable
            </p>
          </div>
          <div className="card-item">
            <FaServer style={{ color: "#2091F9", width: 60 }} />
            <h3>Servers and Databases</h3>
            <p>
              Planning and development of backend applications and databases with a strong focus on their scalability.
            </p>
          </div>
        </div>

        {/* video */}
        {/* <div className="video-container">
          <video src={Video} controls className="video"></video>
        </div> */}
      </div>
    </section>
  );
}
