import { useEffect, useRef } from 'react';
import './App.css';
import ShinyText from './assets/ShinyText';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ReactComponent as AIcon } from './assets/a.svg';
import Particles from './assets/Particles.js';
import ProfileCard from './assets/ProfileCard.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
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
                  <ShinyText text="Home" disabled={false} speed={3} className='custom-class shiny-nav-text' />
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
      <header className="App-header">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <ProfileCard
            name="Senadhi Thimanya"
            title="AI and Data Science Undergraduate"
            handle="Raemih"
            status="Online"
            contactText="Contact Me"
            avatarUrl="senadhi.png"
            iconUrl="iconpattern.png"
            grainUrl="grain.webp"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />
      </header>
      <main>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />
      </main>
      <footer className="App-footer">
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

// You can delete the SplashCursor function if you don't need it anymore.

export default App;
