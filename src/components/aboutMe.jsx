import React from "react";
import myAvatar from "../assets/img/avatar.png";
import aboutData from '../assets/data/about-me.json';

class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
        aboutData
    };
  }

  render() {
    return (
      <section id="about-me" className="p-5 sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <div className="row">
                <div className="col-md-4">
                <img className="img-fluid" src={myAvatar} />
                </div>
                  <div className="col-md-8">
                    <div className="about-me pt-4 pt-md-0">
                    <h5 className="section-title font-weight-bold">About Me</h5>
                      <p>{this.state.aboutData["about-me"]}</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;