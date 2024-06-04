import './indexSection.css'

export default function IndexSection() {
  return (
    <section id="index" className="index-container">
      <div className="index-wrapper">
        <div className="index-wrapper-container">
          <div className="index-title-container">
            <div className="index-title-wrapper">
              <h1>Custom web solutions for your business success</h1>
              <h2>
                Transform your idea into reality through the development of tailored web experiences to boost your business
              </h2>
              <a href="/Fullstack Developer - Agustín Farias.pdf" download>
                <button type='download'>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
