import React from 'react';
import { motion } from 'framer-motion';

const Page5 = () => {
  return (
    <div className="h-screen p-10 bg-white relative">
      <div className="h-full w-full bg-black rounded-[50px] overflow-hidden">
        <video
          autoPlay={true}
          loop
          muted
          className="h-full w-full object-cover"
          src="/src/assets/filee.mp4"
        ></video>
        <div className="z-10 left-10 bottom-10 mb-[130px] text-white absolute font-sans ">
          <div className="mt-10 ml-32 space-y-10 font-sans">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[4.3vh] font-sans">Education</h1>
              <p className="mt-4 text-[2.7vh] font-sans">
                Bachelor of Engineering in Electrical and Electronics Engineering
                Sir M. Visvesvaraya Institute of Technology, University (2021 - 2024)
                
              </p>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-[4.2vh]">Certifications</h1>
              <ul className="mt-4 text-[2.4vh] space-y-2">
                <li>Full Stack Web Developer, DevTown</li>
                <li>Embedded System with IoT, Varcons Technologies</li>
                <li>IBM Call for Code Global Challenge</li>
              </ul>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-[4.3vh]">Achievements</h1>
              <ul className="mt-4 text-[2.4vh] space-y-2">
                <li>Organizing Member, College Technical Fest (2021-2024)</li>
                <li>Chess Competitions (College Level, 2021-2024)</li>
                {/* <li>IBM Call for Code Global Challenge</li> */}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
