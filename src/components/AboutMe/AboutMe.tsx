import React from 'react';
//import avatarImage from "../assets/img/avatar.png";
import AboutMeContext from "../../context/aboutMeContext"

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <section id="about-me" className="p-5 sect-pt4 route">
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-sm-12">
              <div className="row">
              <div className="col-md-4">
              </div>
                <div className="col-md-8">
                  <div className="about-me pt-5 pt-md-0">
                  <h5 className="section-title font-weight-bold">About Me</h5>
                  <div className="text-center">
        <h1 className="text-4xl font-bold card text-red-500">Hello Tailwind CSS with React!</h1>
        <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//  <img className="img-fluid" alt="avatar" src={avatarImage} />

export default AboutMe;