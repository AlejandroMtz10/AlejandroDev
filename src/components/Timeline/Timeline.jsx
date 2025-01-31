/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = ({ jobs }) => {
    return (
        <div className="py-10">
            <VerticalTimeline lineColor="rgb(0, 90, 175)">
                {jobs.map((job, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        date={<h3 className="text-xl font-bold">{job.time}</h3>}
                        iconStyle={{ background: "#43a4ff", color: "#fff" }}
                        icon={
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={job.logo}
                                    alt={job.job}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                        }
                        contentStyle={{ background: "#f3f4f6", color: "#039aff" }} 
                        contentArrowStyle={{ borderRight:"7px solid #f3f4f6" }}
                    >
                        <h3 className="vertical-timeline-element-title text-lg font-bold">
                            {job.job}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm text-gray-600">
                            {job.company}
                        </h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

Timeline.propTypes = {
    jobs: PropTypes.arrayOf(
        PropTypes.shape({
            job: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Timeline;

