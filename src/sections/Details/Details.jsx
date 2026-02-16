import { motion } from "framer-motion";
import "./details.css";

const DetailsSection = () => {
    // Data for the 3 Cards
    const workshops = [
        {
            id: 1,
            title: "VANI-YATRA",
            tagline: "The Journey",
            description: "A transformative 3-month full-time course aimed at enhancing expressive abilities by focusing on voice, breath, speech, and emotional blockages.",
            details: [
                { label: "Duration", text: "3 Months (Full Time)" },
                { label: "Format", text: "4 Sessions/Week (2 Hrs each)" },
                { label: "Outcome", text: "Live performances, Dubbing, Open Mics." }
            ],
            fee: "₹54,999",
            popular: true // We can highlight this card
        },
        {
            id: 2,
            title: "VANI-VIMARSH",
            tagline: "The Discussion",
            description: "A compact yet powerful 4-day workshop tailored for professionals (singers, actors, podcasters) to deepen their skill set.",
            details: [
                { label: "Duration", text: "4 Days (Intensive)" },
                { label: "Format", text: "4 Hours/Day + SWOT Analysis" },
                { label: "Outcome", text: "Enhanced vocal control & actionable techniques." }
            ],
            fee: "₹6,999",
            popular: false
        },
        {
            id: 3,
            title: "VAARTALAP",
            tagline: "The Conversation",
            description: "A one-on-one voice consultancy session designed for individuals seeking clarity, direction, and personalized guidance.",
            details: [
                { label: "Format", text: "1-on-1 Consultation" },
                { label: "Ideal For", text: "Solving specific vocal challenges." },
                { label: "Purpose", text: "Realign with your voice goals." }
            ],
            fee: "₹2,999 / hour",
            popular: false
        }
    ];

    // Animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardAnim = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="details-section" id="details-section">
            <div className="details-container">

                {/* Section Header */}
                <motion.div
                    className="details-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Curriculum</span>
                    <h2 className="hindi-title">खुसुर - फुसुर <span className="serif-highlight">Workshop</span></h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="cards-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {workshops.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardAnim}
                            className={`glass-card ${item.popular ? "featured-card" : ""}`}
                        >

                            <div className="card-header">
                                <h3>{item.title}</h3>
                                <span className="tagline">{item.tagline}</span>
                            </div>

                            <p className="card-desc">{item.description}</p>

                            <div className="card-specs">
                                {item.details.map((detail, index) => (
                                    <div key={index} className="spec-row">
                                        <span className="spec-label">{detail.label}:</span>
                                        <span className="spec-value">{detail.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="card-footer">
                                <div className="fee-label">Course Fee</div>
                                <div className="fee-amount">{item.fee}</div>
                            </div>

                            {/* Subtle shine effect on hover */}
                            <div className="card-shine"></div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default DetailsSection;