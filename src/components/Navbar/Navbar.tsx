import React, { useState } from "react";
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar xl:p-4 fixed top-0 z-100 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg px-2 font-bold">Vee Valand</div>
        <div className="hidden xl:flex space-x-4">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about-me" className="hover:text-white">About Me</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#education" className="hover:text-white">Education</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white">
          <svg className={`menu menuRotate menu ${isOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="60">
            <path className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
            <path className="line middle"
              d="m 30,50 h 40" />
            <path className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="xl:hidden p-4 grid grid-cols-1">
          <a href="#home" className="hover:text-white text-center p-2 m-3">Home</a>
          <a href="#about-me" className="hover:text-white text-center p-2 m-5">About Me</a>
          <a href="#projects" className="hover:text-white text-center p-2 m-5">Projects</a>
          <a href="#skills" className="hover:text-white text-center p-2 m-5">Skills</a>
          <a href="#education" className="hover:text-white text-center p-2 m-5">Education</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;