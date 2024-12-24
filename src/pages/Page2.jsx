
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Page2 = () => {
  const img1Ref = useRef(null); 

  useEffect(() => {
    gsap.to(img1Ref.current, {
      x:30,
      y: -20,
      duration: 10, 
      repeat: -1, 
      yoyo: true, 
      ease: 'power1.inOut', 
      rotate:-360,
    });

  }, []);

  return (
    <div className='h-screen p-10 relative bg-white'>
      <div className='h-full w-full overflow-hidden object-cover bg-black relative rounded-[50px]'>
        <img className='' src="/src/assets/img1.avif" alt="Background" />
        <div className='absolute flex bottom-2 w-full  justify-between p-10'>
          <div className='font-sans'>
            <h1 className='flex text-white text-[7vh] font-semibold'>ABOUT ME</h1>
            <p className='text-white mt-6 text-[2.7vh]'>I am a recent graduate in Electrical and Electronics Engineering with a keen interest in full-stack web development and IT infrastructure. Proficient in HTML, CSS, JavaScript, and ReactJS, I enjoy building responsive and user-centric applications. My diverse project experience includes cloning award-winning websites, designing IoT-based systems, and creating employee management platforms. With a strong foundation in problem-solving and technical skills, I am excited to grow as a developer and contribute to impactful projects.</p>
           
          </div>
          {/* First Image */}
          <img
            ref={img1Ref} 
            className='w-96 h-96 mb-24 ml-20'
            src="/src/assets/img4.png"
            alt="Floating Image 1"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Page2;
