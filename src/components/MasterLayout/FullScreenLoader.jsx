import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaIcons = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-1/4 transform transition-transform duration-500 ${
        visible ? 'translate-x-0' : '-translate-x-full'
      } bg-white rounded-2xl flex flex-col space-y-4 p-2 shadow-lg`}
    >
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800 transition duration-300" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800 transition duration-300" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
