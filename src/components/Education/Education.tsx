import React from 'react';
import educationImage from "../../assets/images/education.png";
import educationData from '../../assets/data/educationData.json';

interface Props {}

const Education: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Education</h1>
      <div className="grid grid-cols-5 ">
        <img className="w-48 h-48 object-contain col-span-1" alt="avatar" src={educationImage} />

        <div className="col-start-2 col-span-4 grid grid-cols-4">
          <div className="col-span-4 grid grid-cols-4">
            <h4 className="col-span-4 text-2xl font-bold">{educationData["institution"]}</h4>
            <h5 className="col-span-4 font-bold">{educationData["degree"]}</h5>
            {educationData.coursework.map((coursework, index) => {
              return (
                <div className="col-span-4 2xl:col-span-2 m-4">
                  <div key={index}>
                    <h4 className="font-bold">{coursework["course_type"]}</h4>
                    <ul className="list-unstyled">
                      {
                        coursework["courses"].map((techstack, index) => {
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
              })}

            <h4 className="col-span-4 text-2xl font-bold">Training Courses</h4>

            {educationData.online_training_certificates.map((otc, index) => {
              return (
                <div className="col-span-4 2xl:col-span-2 m-4">
                    <h4 className="font-bold">{otc["learning_platform"]}</h4>
                    <ul className="list-unstyled">
                      {
                        otc["courses"].map((courses, index) => {
                        return (
                            <li key={index}>
                              <a href={courses["certification_location_reference"]}>
                                {courses["course_name"]}
                              </a>
                            </li>
                        );
                        }
                      )}
                    </ul>
                </div>
                );
            })}
          </div>            
        </div>
      </div>
  </div>
  );
};

export default Education;





