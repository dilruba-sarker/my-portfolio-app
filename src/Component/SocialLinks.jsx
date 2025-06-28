import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://github.com/dilruba-sarker"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black text-2xl"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/dilruba-sarker-036011210/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 text-2xl"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/Dilruba9S"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 text-2xl"
      >
        <FaTwitter />
      </a>

      <a
        href="https://www.facebook.com/Dilruba9S/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
