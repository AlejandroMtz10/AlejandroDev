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
    const url4llCodeSoft = "https://www.facebook.com/profile.php?id=61560866121407";
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
                    In addition to my experience as a software development intern, I have taken part in collaborative projects for local clients, offering customized software solutions through my own initiative, <a href={url4llCodeSoft}>4LL Code Soft</a> — a collaborative project with friends where we develop desktop, mobile, and web applications, as well as other types of tailored software solutions.
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
