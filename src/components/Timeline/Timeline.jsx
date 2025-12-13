import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TimelineItem = ({ job, company, time, logo, index }) => {
    // Even index → content on the left, odd index → content on the right
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid grid-cols-2 items-center py-6 md:py-10 w-full"
        >
        {/* Left column */}
        <div className="flex flex-row-reverse pr-16 md:pr-10 lg:pr-16">
            <div className="flex flex-col max-w-sm w-full">
                {/* Show date on left side for even items */}
                {isLeft && (
                    <span className="text-sm font-medium text-gray-400 text-right mb-1">
                    {time}
                    </span>
                )}

                {/* Show role/company on left side for odd items */}
                {!isLeft && (
                    <div className="text-right">
                    <h3 className="text-lg font-semibold text-white">{job}</h3>
                    <p className="text-sm text-gray-400">{company}</p>
                    </div>
                )}
            </div>
        </div>

        {/* Right column */}
        <div className="flex pl-16 md:pl-10 lg:pl-16">
            <div className="flex flex-col max-w-sm w-full">
                {/* Show role/company on right side for even items */}
                {isLeft && (
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-white">{job}</h3>
                        <p className="text-sm text-gray-400">{company}</p>
                    </div>
                )}

                {/* Show date on right side for odd items */}
                {!isLeft && (
                    <span className="text-sm font-medium text-gray-400 text-left mb-1">
                        {time}
                    </span>
                )}
            </div>
        </div>

            {/* Center node (company logo) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-cyan-500 flex items-center justify-center shadow-md">
                    <img
                        src={logo}
                        alt={company}
                        className="w-12 h-12 object-contain rounded-full"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = ({ jobs }) => {
    return (
        <section className="relative max-w-5xl mx-auto py-16">
            {/* Central vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-cyan-600/50" />

            {jobs.map((job, index) => (
                <TimelineItem key={index} {...job} index={index} />
            ))}
        </section>
    );
};

TimelineItem.propTypes = {
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

Timeline.propTypes = {
    jobs: PropTypes.arrayOf(
        PropTypes.shape(TimelineItem.propTypes)
    ).isRequired,
};

export default Timeline;