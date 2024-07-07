import React from "react";
import educationImage from "../assets/img/education.png";
import educationData from '../assets/data/education.json';

class Education extends React.Component {
  constructor() {
    super();
    this.state = {educationData};
  }

  render() {
    return (
      <section id="education" className="p-5 bg-dark-override text-white route">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a text-white pt-4">Education</h3>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-sm-12">
                <div className="row">
                <div className="col-md-2">
                <img className="img-fluid" alt="education" src={educationImage} />
                </div>
                  <div className="col-sm-10">
                    <div className="about-me pt-5 pt-md-0">
                      
                        <div class="row">
                        <div className="col-sm">
                        <h4 className="text-white">{educationData["institution"]}</h4>
                        </div>
                        </div>
                        <div class="row">
                        <div className="col-sm">
                        <h5 className="text-white">{educationData["degree"]}</h5>
                        </div>
                        </div>
                        <div class="row">
                    {this.state.educationData.coursework.map(coursework => {
                        return (
                            <div className="col-sm-6 mt-5">
                            <p key={coursework["course-id"]}>
                            <h4 className="font-weight-bold text-white">{coursework["course-type"]}</h4>
                            <ul className="list-unstyled">
                            {coursework["courses"].map(techstack => {
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
export default Education;