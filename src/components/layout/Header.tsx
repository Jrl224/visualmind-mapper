
import React from "react";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">VisualMind</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-600 hover:text-primary">Features</a>
          <a href="#process" className="text-sm text-gray-600 hover:text-primary">How it Works</a>
          <a href="https://github.com" className="text-sm text-gray-600 hover:text-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
