import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#181824' },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: '#fff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 2 },
            links: {
              enable: true,
              color: '#fff',
              distance: 150,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: false,
              straight: false,
              outModes: { default: 'out' },
              attract: { enable: false },
              parallax: { enable: true, force: 60, smooth: 10 },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: false },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
    </Div>
  );
};

export default HeroBgAnimation;