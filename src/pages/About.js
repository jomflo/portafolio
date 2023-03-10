import React from "react";
import "../styles/About.css";
import { PersonalInformation } from "../components/PersonalInformation";
import { AcademicData } from "../components/AcademicData";
import {LanguageSkills} from '../components/LanguageSkills';

export function About() {
  return (
    <div className="about">
      <div className="about-personal-information">
        <PersonalInformation/>
      </div>
      <div className="about-academic-data">
       <AcademicData/>
      </div>
      <div className="about-language-skills">
        <LanguageSkills/>
      </div>
    </div>
  );
}
