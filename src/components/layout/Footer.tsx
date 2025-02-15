
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600">
          Open Source AI-Powered Visualization Tool
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-primary"
          >
            GitHub
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#documentation"
            className="text-sm text-gray-600 hover:text-primary"
          >
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
