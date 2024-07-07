import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//// import styles
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
//import './img/icons/css/ionicons.css';
//import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './index.css';
//
////import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

//import components
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import AboutMe from './components/aboutMe.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import Education from './components/education.jsx';
import Footer from './components/footer.jsx';


//import Contact from './components/contact.jsx';
//import BackToTop from './components/back-top.jsx';
//import Preloader from './components/preloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Navbar />
      <Home /> 
      <AboutMe /> 
      <Projects />
      <Skills />  
      <Education />  
      <Footer />
      </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
