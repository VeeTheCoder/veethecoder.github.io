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
          projectData.projects.map((projects, index) => {
            return (
              <div className="my-5" key={index}>
                <h4 className="font-bold">{projects["project_name"]}</h4>
                <p>
                  {projects["project_description"]}
                </p>

                <ul className="mt-2 flex flex-wrap">
                  {
                    projects["tech_stack"].map((techstack, index) => {
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





