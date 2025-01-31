// eslint-disable-next-line no-unused-vars
import React from "react";
import CertificateCard from "../CertificateCard";
import certificates from "../../json/certificates.json"; // Tu archivo JSON con los datos

const CertificateList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 p-6">
            {certificates.map((cert, index) => (
                <CertificateCard
                key={index}
                course={cert.course}
                platform={cert.platform}
                picture={cert.picture}
                />
            ))}
        </div>
    );
};

export default CertificateList;
