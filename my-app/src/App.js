import './App.css';
import ShinyText from './assets/ShinyText';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ReactComponent as AIcon } from './assets/a.svg';
import Particles from './assets/Particles.js';
import ProfileCard from './assets/ProfileCard.js';
import senadhiImg from './assets/senadhi.png';
import grainImg from './assets/grain.webp';
import iconImg from './assets/iconpattern.png';
import Ballpit from './assets/Ballpit.js';
import NovelteaLogo from './assets/NovelteaLogo.svg';
import TravelLogo from './assets/TravelguideLogo.svg';
import TaxLogo from './assets/TaxLogo.svg';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ padding: 0 }}>
            <AIcon style={{ height: '2em', width: 'auto', display: 'block' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <ShinyText text="Profile" disabled={false} speed={3} className='custom-class shiny-nav-text' />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <ShinyText text="Biography" disabled={false} speed={3} className='custom-class shiny-nav-text' />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <ShinyText text="Projects" disabled={false} speed={3} className='custom-class shiny-nav-text' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header" style={{ paddingTop: '100px' }}>
        <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
          <Particles
            particleColors={['#f5e1e3', '#f3d5db', '#f0ccd7', '#ebc2d1', '#e4a5c5', '#db87be']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <ProfileCard
            name="Senadhi Thimanya"
            title="AI and Data Science Undergraduate"
            handle="Raemih"
            status="Online"
            contactText="Contact Me"
            avatarUrl={senadhiImg}
            iconUrl={iconImg}
            grainUrl={grainImg}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </header>
      <main>
        <div style={{ width: '100%', height: '1000px', position: 'absolute' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="text-4xl font-bold">
          <ShinyText text="Projects" disabled={false} speed={3} className='custom-class Project-header' id='header-section' />
        </div>
        <div class="container">
          <div class="projects-grid">
            <div class="project-card">
              <a href='https://github.com/senadhi-Thimanya/POS-TAX-System' target="_blank" >
                <div class="project-image">
                  <img src={TaxLogo} alt="Tax System Logo" />
                </div>
                <div class="project-content">
                  <h3 class="project-title">POS + Tax System</h3>
                  <p class="project-description">
                    POS system for a cakery and TAX system for a government employee
                  </p>
                  <div class="project-tech">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Java</span>
                    <span class="tech-tag">JavaFX</span>
                    <span class="tech-tag">Maven</span>
                  </div>
                </div>
              </a>
            </div>

            <div class="project-card">
              <a href='https://github.com/senadhi-Thimanya/NovelTea-Website' target="_blank" >
                <div class="project-image">
                  <img src={NovelteaLogo} alt="Bookstore Website" />
                </div>
                <div class="project-content">
                  <h3 class="project-title">Bookstore Website</h3>
                  <p class="project-description">
                    An online platform for browsing and purchasing books, featuring user reviews and recommendations.
                  </p>
                  <div class="project-tech">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">CSS</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">XML</span>
                  </div>
                </div>
              </a>
            </div>

            <div class="project-card">
              <a href='https://github.com/senadhi-Thimanya/AI-Travel-Guide-for-Sri-Lanka' target="_blank" >
                <div class="project-image">
                  <img src={TravelLogo} alt="AI travel guide" />
                </div>
                <div class="project-content">
                  <h3 class="project-title">Sri Lankan AI Travel Guide</h3>
                  <p class="project-description">
                    Sri Lankan Tourist Guide Chat Assistant using RAG Technology
                  </p>
                  <div class="project-tech">
                    <span class="tech-tag">Bicep</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">Azure AI Services</span>
                    <span class="tech-tag">HTML</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <div style={{ position: 'absolute', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
          <Ballpit
            count={1000}
            gravity={0.5}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={['#eed4d7', '#eabdc5', '#e5a7b3', '#e089a3', '#db74a1', '#d55ca6']}
            ambientIntensity={2}
            lightIntensity={50}
            maxSize={0.4}
            minSize={0.1}
            size0={0.7}
          />
        </div>

      </footer>
    </div>
  );
}

// You can delete the SplashCursor function if you don't need it anymore.

export default App;
