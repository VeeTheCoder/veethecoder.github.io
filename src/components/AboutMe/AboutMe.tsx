import React from 'react';
import avatarImage from "../../assets/images/avatar.jpg";
import aboutMeData from '../../assets/data/aboutMeData.json';

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <img className="object-contain rounded-full" alt="avatar" src={avatarImage} />
      <div className="col-start-2 col-span-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg">{aboutMeData["aboutMe"]}</p>
      </div>
    </div>
  );
};

export default AboutMe;





