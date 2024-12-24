// import React from 'react'

// const HireMe = () => {
    
//   return (
//     <div className="h-[120vh] p-10 relative bg-white">
//     <div className="h-full w-full overflow-hidden z-10 object-cover bg-black relative rounded-[50px]">
//     <img className='h-full ' src="/src/assets/img1.avif" alt="" />

//       </div>
//       </div>

//   )
// }

// export default HireMe

import React, { useState } from 'react';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormStatus('Thank you.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="h-[120vh] p-10 relative bg-white">
      {/* Background Image */}
      <div className="h-full w-full overflow-hidden z-0 object-cover bg-black relative rounded-[50px]">
        <img className="h-full w-full object-cover" src="/src/assets/img1.avif" alt="" />
      </div>

      {/* Form Section */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Hire Me</h1>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Status Message */}
          {formStatus && (
            <p className="mt-4 text-green-500 text-center font-medium">{formStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HireMe;
