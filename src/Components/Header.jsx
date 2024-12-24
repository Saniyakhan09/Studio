


import React from 'react';
import { Link } from 'react-router-dom'; 
// import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className="items-center p-20 w-full flex justify-end fixed top-0 right-0 z-10">
      <Link to="/hireme">
        <button className="rounded-full bg-black py-2 px-6 mt-5 mr-4 flex text-xl text-white border-2 hover:bg-gray-500">
          Hire me
        </button>
      </Link>
      {/* <i className="ri-more-2-line text-white text-3xl pt-5 pr-0"></i> */}
    </div>
  );
};

export default Header;
