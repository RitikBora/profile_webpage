// Contact.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto bg-amber-50">
      <h2 className="text-6xl font-bold text-center text-gray-900 mb-20">Reach Me At</h2>
      <div className="space-y-8">
        <div className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-gray-700" />
          <a href="mailto:ritikbora2000@gmail.com" className="text-2xl text-gray-700 hover:text-gray-900">
            ritikbora2000@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-gray-700" />
          <a href="https://www.linkedin.com/in/ritikbora" className="text-2xl text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/ritikbora
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-700" />
          <a href="https://github.com/RitikBora" className="text-2xl text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
            https://github.com/RitikBora
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faPhone} className="text-3xl text-gray-700" />
          <span className="text-2xl text-gray-700">+91 7453082420</span>
        </div>
        <div className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-gray-700" />
          <span className="text-2xl text-gray-700">Pune, India</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
