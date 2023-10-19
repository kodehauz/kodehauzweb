'use client';
import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import particleConfig from '../../particleConfig.json';

function ParticlesComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id='tsparticles'
      options={particleConfig}
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    />
  );
}

export default ParticlesComponent;

// import React from 'react';

// function Particles() {
//   return (
//     <div className='min-h-screen fixed pt-20'>
//       <div className='flex items-center justify-center w-full wrap flex-wrap opacity-20'>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri justify-self-end'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//         <div className='circle w-36 h-36 border-2 rounded-full border-pri'></div>
//       </div>
//     </div>
//   );
// }

// export default Particles;
