import { motion } from "framer-motion";
import "./personalSection.css";

import facilitatorImage from "../../assets/2.webp"; 

const PersonalSection = () => {
    return (
        <section className="personal-section" id="facilitator">
            <div className="personal-container">

                {/* Left: The Image (Polaroid Style) */}
                <motion.div
                    className="image-wrapper"
                    initial={{ opacity: 0, x: -50, rotate: -2 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="photo-frame">
                        <img src={facilitatorImage} alt="Shantam - Facilitator" />
                        <div className="photo-caption">Shantam</div>
                    </div>
                </motion.div>

                {/* Right: The Content */}
                <motion.div
                    className="content-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-heading">
                        Meet the <span className="serif-highlight">Facilitator</span>
                    </h2>

                    <div className="bio-text">
                        <p className="lead-paragraph">
                            Shantam has a long-standing association with <span className="highlight">performing arts</span>,
                            deeply rooted in theatre practices, Indian classical music, and films.
                        </p>

                        <div className="bio-grid">
                            <div className="bio-item">
                                <h4>Education</h4>
                                <p>Alumnus of <b>Patha-Bhavana, Visva-Bharati University</b>, Santiniketan. Holds a Diploma in Acting from <b>Roshan Taneja School of Acting</b>, Mumbai.</p>
                            </div>

                            <div className="bio-item">
                                <h4>Experience</h4>
                                <p>Former faculty at Roshan Taneja School of Acting, specializing in <b>breath & voice exercises</b> and singing for actors. Global Member of <b>VASTA</b>.</p>
                            </div>

                            <div className="bio-item">
                                <h4>The Workshop</h4>
                                <p>Founder of <b>खुसुर-फुसुर (Khusur-Phusur)</b>, a workshop designed not just for artists, but for <b>anyone who uses their voice</b>.</p>
                            </div>
                        </div>

                        <p className="closing-text">
                            He works with theatre groups on a collaboration basis and conducts workshops <b>PAN INDIA</b>.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PersonalSection;