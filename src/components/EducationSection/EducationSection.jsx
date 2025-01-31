// eslint-disable-next-line no-unused-vars
import React from "react";
import Awards from "../Awards";
import Contests from "../Contests";
import CertificateList from "../CertificateList";

function EducationSection(){
    return(
        <section className="container mx-auto px-8 py-3">
            <article className="text-3xl text-cyan-500">
                I studied at the <i>Tecnológico Nacional de México Campus Ciudad Acuña</i> in Acuña City, Coahuila where I studied <b>computer systems engineering specializing in software architecture and design</b>, during my studies I participated in different national and international programming competitions, development of projects within companies such as Toter and Caterpillar, for customers or as personal projects and I was also recognized three times as best student in the academy of systems in various semesters and the best student of the major of the generation 2019-2024.
            </article>

            <h2 className="text-4xl font-semibold text-white py-2">
                Awards of excellence in the Systems Academy
            </h2>
            <div className="container mx-auto">
                <Awards />
            </div>

            <h2 className="text-4xl font-semibold text-white py-2">
                Contests
            </h2>
            <div className="container mx-auto ">
                <Contests />
            </div>
            <h2 className="text-4xl font-semibold text-white py-2">
                Certificates
            </h2>
            <div className="container mx-auto">
                <CertificateList />
            </div>
        </section>
    );
}

export default EducationSection;