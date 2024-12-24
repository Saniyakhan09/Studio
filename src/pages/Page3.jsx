
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faJs, faReact, faWordpress, faBootstrap, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const boxRefs = useRef([]);
  const headingRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      videoRef.current,
      { scale: 1.1 },
      {
        scale: 1,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      }
    );

    boxRefs.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-[120vh] p-10 relative bg-white">
      {/* Background Video */}
      <div className="h-full w-full overflow-hidden object-cover bg-black relative rounded-[50px]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover z-0 absolute"
          src="/src/assets/file2.mp4"
        ></video>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Page Title */}
          <div className="flex justify-center mt-10">
            <h1
              ref={headingRef}
              className="text-white text-4xl font-bold">
              What I Use
            </h1>
          </div>

          {/* Boxes Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 ml-20 gap-20">
            {[ 
              { icon: faHtml5, title: 'HTML', desc: 'HTML is a markup language used to structure and display content on the web.' },
              { icon: faCss3Alt, title: 'CSS', desc: 'CSS is a style sheet language used to design and enhance the visual presentation of web pages.' },
              { icon: faJs, title: 'JavaScript', desc: 'JavaScript is a programming language that enables dynamic content and interactivity on web pages.' },
              { icon: faReact, title: 'ReactJS', desc: 'ReactJS is a JavaScript library for building fast, scalable, and interactive user interfaces.' },
              { icon: faWordpress, title: 'WordPress', desc: 'WordPress is a content management system for creating websites with customizable themes and plugins.' },
              { icon: faBootstrap, title: 'Bootstrap', desc: 'Bootstrap is a front-end framework for developing responsive, mobile-first web designs efficiently.' },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
                className="flex p-5 h-64 w-80 rounded-md bg-white flex-col shadow-md transform transition duration-500 ease-in-out hover:-translate-y-2 hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-black-500 text-6xl pb-2"
                />
                <h1 className="text-black text-3xl font-sans font-semibold pt-2">
                  {item.title}
                </h1>
                <p className="pt-3 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
