import React from 'react';
import './Navbar.css';

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <ul>
        <li>
          <a href="#" className="text-lg font-bold">
            Logo
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;