import React from "react";
import skillsImage from "../assets/img/skills.png";
import skillsData from '../assets/data/skills.json';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {skillsData};
  }

  render() {
    return (
      <section id="skills" className="p-5 route">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
                <div className="row">
                <div className="col-md-2">
                <img className="img-fluid" alt="skills" src={skillsImage} />
                </div>
                  <div className="col-sm-10">
                    <div className="about-me pt-4 pt-md-0">
                        <div class="row">
                    {this.state.skillsData.skills.map(skills => {
                        return (
                            <div className="col-sm-6">

                        <p key={skills["skill-type"]}>
                            <h4 className="font-weight-bold">{skills["skill-name"]}</h4>
                            <ul className="list-unstyled">
                            {skills["skill-list"].map(techstack => {
                              return (
                                  <li>
                                    {techstack}
                                  </li>
                              );
                            }
                            )}
                                </ul>

                        </p>
                        </div>
                        );
                      })}</div>

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
export default Skills;