import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Moon from './components/moon-model/Moon';
import Spinner from './components/moon-model/Spinner';

function App() {
  return (
    <>
      <div className="layout">
        <div className="canvas-container">
          <Canvas id="three-canvas-container">
            <Suspense fallback={<Spinner />} />
            <Moon />
          </Canvas>
        </div>
      </div>

      <div className="content">
        <div className="article">
          <div className="header">the Moon</div>
          <p>Diameter: 3,475 km</p>
          <p>Mass: 7.35 × 10^22 kg (0.01 Earths)</p>
          <p>Distance from Earth: 385,000 km</p>
          <p>Orbit period: 27.3 days</p>
          <p>Surface temperature: -233 to 123 °C</p>
          <p>Moonless: the Moon has no moons</p>
          <p>Ringless: the Moon has no rings</p>
          <p>Visitors: 12 people and more than 105 robotic spacecraft</p>
          <p>Population: zero</p>
        </div>
      </div>
    </>
  );
}

export default App;
