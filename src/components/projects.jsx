import React from "react";
import myImage from "../assets/img/projects.png";
import projectData from '../assets/data/projects.json';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {projectData};
  }

  render() {
    return (
      <section id="projects" className="p-5 bg-dark-override text-white route">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a text-white">Projects</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
                <div className="row">
                <div className="col-md-2">
                <img className="img-fluid" src={myImage} />
                </div>
                  <div className="col-md-10">
                    <div className="about-me pt-4 pt-md-0">
                    {this.state.projectData.projects.map(projects => {
                        return (
                          <p key={projects["project-id"]}>
                            <h4 className="text-white font-weight-bold">{projects["project-name"]}</h4>
                            {projects["project-description"]}
                            <div className="row">
                            <div className="col-sm-12">
                            <ul className="projects-tech-stack">
                            {projects["tech-stack"].map(techstack => {
                              return (
                                  <li>
                                    {techstack}
                                  </li>
                              );
                            }
                            )}
                                </ul>
                              </div>
                              </div>
                          </p>
                        );
                      })}
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