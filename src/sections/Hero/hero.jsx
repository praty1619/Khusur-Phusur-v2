import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.css";
import logoImage from "../../assets/Khusur-Phusur-Logo.png";

const Hero = () => {
    const navigate = useNavigate();
    
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    const handleScrollDown = () => {
        const nextSection = document.getElementById("facilitator");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // What's App Integration
    const handleWhatsAppClick = () => {
        // 1. Set the WhatsApp number (Include country code, no + or spaces)
        const phoneNumber = "+917735231158";

        // 2. Create the default message the user will send you
        const message = "Hi Shantam! I am interested in joining the Khusur-Phusur workshop. I have a few queries...";

        // 3. Encode the message so it works in a URL
        const encodedMessage = encodeURIComponent(message);

        // 4. Create the final wa.me link
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // 5. Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="hero-container">
            <div className="hero-grid">
                {/* Left: Typography Content */}
                <motion.div
                    className="hero-text-content"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.div variants={fadeUp} className="badge-wrapper">
                        <span className="hero-badge">Khusur Phusur Workshop</span>
                    </motion.div>

                    {/* NEW: Logo placed here ONLY for Mobile view */}
                    <motion.div variants={fadeUp} className="mobile-logo-container">
                        <img
                            src={logoImage}
                            alt="Khusur Phusur"
                            className="mobile-logo breathing-logo"
                        />
                    </motion.div>
                    {/* ============================================ */}

                    <motion.h1 variants={fadeUp} className="hero-headline">
                        Master the <br />
                        <span className="italic-accent">Rhythm</span> of <br />
                        Your Voice.
                    </motion.h1>

                    <motion.p variants={fadeUp} className="hero-subtext">
                        A specialized workshop designed to help you unlock the true potential of your breath and presence.
                    </motion.p>

                    <motion.div variants={fadeUp} className="hero-cta-group">
                        <button className="btn-primary" onClick={handleWhatsAppClick}>Join the Workshop</button>
                        <button className="btn-text" onClick={() => navigate("/reviews")}>
                            Watch Video Reviews →
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right: The Desktop Visual/Logo */}
                <motion.div
                    /* Added 'desktop-visual' class to hide it on mobile */
                    className="hero-visual-content desktop-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="logo-container">
                        <img
                            src={logoImage}
                            alt="Khusur Phusur"
                            className="main-logo breathing-logo"
                        />
                    </div>
                </motion.div>

                {/* NEW: Scroll Down Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    onClick={handleScrollDown} // 👈 Logic added here
                >
                    <span className="mouse-icon">
                        <span className="wheel"></span>
                    </span>
                    <p>Scroll to Breathe</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;