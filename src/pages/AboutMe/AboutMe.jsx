/* eslint-disable no-unused-vars */
import React from "react";
import MyInfo from "../../components/MyInfo";
import Timeline from "../../components/Timeline";
import StackTech from "../../components/StackTech";
import StackTools from "../../components/StackTools";
import EducationSection from "../../components/EducationSection";
import './AboutMe.css';
import jobs from "../../json/jobs.json";

function AboutMe() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-end">
                <h1 className="pt-2">
                    About me
                </h1>
            </div>
            <MyInfo />
            <div className="container">
                <h1 className="text-4xl pb-4">
                    Technologies
                </h1>
                <hr />
                <StackTech />
            </div>
            <div className="container">
                <h1 className="text-4xl pb-4">
                    Tools
                </h1>
                <hr />
                <StackTools />
            </div>
            <div className=" text-gray-200">
                <h1 className="text-4xl pb-4">
                    Experience
                </h1>
                <hr />
                <p className="text-2xl text-cyan-500 py-4">
                    Throughout my career I have not only worked as an intern in companies but I have also worked on projects for clients who have requested my services as a software developer.
                </p>
                <Timeline jobs={jobs} />
            </div>
            <div>
                <h1 className="text-4xl pb-4">
                    Education
                </h1>
                <hr />
                <EducationSection />
            </div>
        </div>
    );
}

export default AboutMe;
