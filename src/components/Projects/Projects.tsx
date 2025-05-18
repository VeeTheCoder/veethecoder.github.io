import React from 'react';
import projectsImage from "../../assets/images/projects.png";
import projectData from '../../assets/data/projectData.json';

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-5 gap-6">
      <img className="w-48 h-48 object-contain col-span-1" alt="avatar" src={projectsImage} />
      <div className="col-start-2 col-span-4">
        {
          projectData.projects.map((project, index) => {
            return (
              <div className="my-5" key={index}>
                <h4 className="font-bold text-xl">{project["project_name"]}</h4>
                <p>
                  {project["project_description"]}
                </p>
                <div className="grid grid-cols-8 gap-2 mt-2 ">
                  <ul className="flex flex-wrap col-span-7">
                    {
                      project["tech_stack"].map((techstack, index) => {
                        return (
                          <li key={index} className="mr-1.5 mt-2">
                            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {techstack}
                            </p>
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <ul className="col-span-1 flex flex-wrap justify-end gap-2">
                    <li className={"" + (project["project_source"] ? "underline hover:text-white" : "hidden")}>
                      <a href={project["project_source"]}>
                        Source
                      </a>
                    </li>
                    <li className={"" + (project["project_demo"] ? "underline hover:text-white" : "hidden")}>
                      <a href={project["project_demo"]} className='items-end'>
                        Demo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  </div>
  );
};

export default Projects;





