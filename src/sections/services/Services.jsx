import "./services.css";
import WebServices from '../../assets/services-one.gif'
import DesignServices from '../../assets/services-two.gif'

export default function Services() {
  return (
    <section id="services" className="services-container">
      <div className="services-wrapper">
        <h1 className="services-title">What do I do?</h1>
        <div className="services-item">
          <div className="services-text-container">
            <h2>User Experience (UX) Design</h2>
            <p>
              My experience as a Frontend developer and various Google courses have allowed 
              me to develop design skills to make applications even more scalable and profitable 
              in the long term.
            </p>
          </div>
          <img src={WebServices} alt="" />
        </div>
        <div className="services-item second">
          <div className="services-text-container second">
            <h2>Development and deployment of applications and websites</h2>
            <p>
              As a web developer, I am equipped to turn an idea into a scalable and profitable 
              project on the internet, using the necessary technologies to ensure the success of 
              your digital business.
            </p>
          </div>
          <img src={DesignServices} alt="" />
        </div>
      </div>
    </section>
  );
}
