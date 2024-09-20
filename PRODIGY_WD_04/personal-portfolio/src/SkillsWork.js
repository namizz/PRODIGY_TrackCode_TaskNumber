import React from "react";
import Logos from "./logo";
import Experience from "./ExperienceInfo";
import Project from "./Proejct";

export default function Skills() {
  const MajorSkills = function () {
    return (
      <div id="major-skills">
        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
        />

        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
        />

        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
        />

        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
        />

        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
        />

        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="Figma"
        />

        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="SQL"
        />
      </div>
    );
  };
  const MinorSkills = function () {
    return (
      <div id="minor-skills">
        <Logos
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
        />

        <Logos
          src="https://cdn-icons-png.flaticon.com/512/2391/2391422.png"
          alt="Assembly Language"
        />
      </div>
    );
  };

  const SkillBody = function () {
    return (
      <div>
        <h1>Skills</h1>
        <hr />
        <div id="skills">
          <div>
            <h2>Major Skills</h2>
            <MajorSkills />
          </div>
          <div>
            <h2>Minor Skills</h2>
            <MinorSkills />
          </div>
        </div>
      </div>
    );
  };
  const AllExperience = function () {
    return (
      <div id="experience-card">
        <h1>Experience</h1>
        <hr />
        <Experience
          role="Internship in Prodigy InfoTech Company"
          image="https://avatars.githubusercontent.com/u/130365840?s=280&v=4"
          startDate="Aug 1, 2024"
          endDate="Sept 4,2024"
          Description="I worked in web development at Prodigy Info Tech during an online internship. It was a great experience, and I learned a lot more about HTML, CSS, JS, and React."
        />
      </div>
    );
  };
  const MyWork = function () {
    return (
      <div id="projects">
        <h1>My Works</h1>
        <hr />
        <div id="project-frame">
          <Project
            projectName="Get Pokomen"
            projectImage="https://github.com/namizz/PRODIGY_TrackCode_TaskNumber/blob/main/PRODIGY_WD_04/personal-portfolio/src/images/Screenshot%20(2).png?raw=true"
            projectLink="https://github.com/namizz/Pokemon"
          />
          <Project
            projectName="Scientific Calculator"
            projectImage="https://github.com/namizz/PRODIGY_TrackCode_TaskNumber/blob/main/PRODIGY_WD_04/personal-portfolio/src/images/Screenshot%20(3).png?raw=true"
            projectLink="https://github.com/namizz/Scientfic-Calculator-in-java"
          />
          <Project
            projectName="Meme Generator"
            projectImage="https://github.com/namizz/PRODIGY_TrackCode_TaskNumber/blob/main/PRODIGY_WD_04/personal-portfolio/src/images/Screenshot%20(4).png?raw=true"
            projectLink="https://github.com/namizz/Meme-Generator-React-app-"
          />
          <Project
            projectName="Tic-Tac-Toe Game"
            projectImage="https://github.com/namizz/PRODIGY_TrackCode_TaskNumber/blob/main/PRODIGY_WD_04/personal-portfolio/src/images/Screenshot%20(5).png?raw=true"
            projectLink="https://namizz.github.io/PRODIGY_TrackCode_TaskNumber/PRODIGY_WD_03/"
          />
          <Project
            projectName="Beat Box"
            projectImage="https://github.com/namizz/PRODIGY_TrackCode_TaskNumber/blob/main/PRODIGY_WD_04/personal-portfolio/src/images/Screenshot%20(6).png?raw=true"
            projectLink="https://github.com/namizz/Beat-Box"
          />
        </div>
      </div>
    );
  };
  const Transtion = function () {
    return <div id="transtion"></div>;
  };
  return (
    <div>
      <div className="sew">
        <SkillBody />
        <AllExperience />
        <MyWork />
      </div>
      <Transtion />
    </div>
  );
}
