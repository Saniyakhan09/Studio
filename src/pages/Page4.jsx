
import React from 'react';
import { motion } from 'framer-motion';

const Page4 = () => {
  const items = [
    {
      title: 'Animated Website - Lazarev Agency Clone',
      description:
        'Reproduced the award-winning Lazarev Agency website with dynamic animations, interactive elements, and responsive design using HTML, CSS, and JavaScript, demonstrating strong attention to detail and design replication.',
        link: 'View on GitHub',

    },
    {
      title: 'Employee Management System',
      description:
        ' Developed an employee management system in ReactJS, enabling employers to assign tasks and employees to accept, reject',
        linkk: 'View on GitHub',

    },
    {
      title: 'Janani Vidya Mandira',
      description:
        ' Built the KryptNetwork website using WordPress, focusing on a user-friendly interface, responsive design, and performance optimization to enhance cross-device compatibility and user engagement'

    },
    {
      title: 'Advanced Traffic Control System',
      description:
        ' Built the KryptNetwork website using WordPress, focusing on a user-friendly interface, responsive design, and performance optimization to enhance cross-device compatibility and user engagement'

    },
    
  ];

  return (
    <div className="h-screen p-10 bg-white">
      <div className="h-full w-full relative overflow-hidden bg-black rounded-[50px]">
        {/* Flex Container */}
        <div className="flex absolute z-10 text-white justify-between p-10 w-full">
          <div className="w-[40%] font-sans text-[20vh] font-semibold">
            <h1 className='mb-0'>MY </h1>
            <h1 className="text-gray-700 -mt-24 pb-10">PROJECTS</h1>
          </div>

          <div className="w-[60%] pl-48 space-y-10">


            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h1 className="font-extralight text-[3.8vh] ">{item.title}</h1>
                <p className=" text-[2.2vh]">{item.description}</p>
                <a  href="https://github.com/Saniyakhan09/Animatedclone" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white-500 underline  ">{item.link}
        
        
      </a>
      <a  href="https://github.com/Saniyakhan09/React-project1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white-500 underline mt-3 ">{item.linkk} 
      </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
