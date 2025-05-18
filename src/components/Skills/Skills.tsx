import React from 'react';
import skillsImage from "../../assets/images/skills.png";
import skillData from '../../assets/data/skillData.json';

interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>
      <div className="grid grid-cols-5 ">

      <img className="w-48 h-48 object-contain col-span-1 col-start-1" alt="skills" src={skillsImage} />
      <div className="col-start-2 col-span-4 grid grid-cols-4">
        {
          skillData.skills.map((skills, index) => {
            return (
            <div className="col-span-4 2xl:col-span-2 m-4">
            <div key={index}>
                <h4 className="font-bold text-xl">{skills["skill_name"]}</h4>
                <ul >
                {
                  skills["skill_list"].map((techstack, index) => {
                  return (
                      <li key={index}>
                        {techstack}
                      </li>
                  );
                }
                )}
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

export default Skills;





