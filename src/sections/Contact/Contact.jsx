import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./Contact.css";

function Contact() {
    const cardRef = useRef(null);

    // Track mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add a physics spring so the tilt feels smooth and heavy, like real cardboard
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    // Map the mouse position to rotation degrees (max 8 degrees of tilt)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate percentage from center (-0.5 to 0.5)
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        // Snap back to flat when mouse leaves
        x.set(0);
        y.set(0);
    };

    return (
        <footer className="contact-section" id="contact">
            <div className="ticket-3d-wrapper">

                {/* The Physical Ticket */}
                <motion.div
                    ref={cardRef}
                    className="ticket-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* Left Section: The Main Details */}
                    <div className="ticket-main" style={{ transform: "translateZ(30px)" }}>
                        <div className="ticket-header">
                            <span className="ticket-label">Khusur-Phusur Workshop</span>
                            <h2>Get in <span className="serif-highlight">Touch</span></h2>
                        </div>

                        <p className="contact-desc">
                            For collaboration, participation in our workshops, <br />
                            or personal voice training, kindly reach out:
                        </p>

                        <div className="ticket-socials">
                            <a href="https://www.instagram.com/khusurphusurofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a href="https://www.linkedin.com/in/shantam-pandit-457752229/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                            <a href="mailto:khusurphusur2024@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-envelope"></i> Email Us
                            </a>
                        </div>
                    </div>

                    {/* The Perforation Line */}
                    <div className="ticket-perforation"></div>

                    {/* Right Section: The Stub */}
                    <div className="ticket-stub" style={{ transform: "translateZ(20px)" }}>
                        <div className="stub-content">
                            <div className="stub-text">
                                <span className="admit-one">ADMIT ONE</span>
                            </div>
                            <div className="stub-info">
                                <p><i className="fas fa-phone"></i> +91 7735231158</p>
                                <p><i className="fas fa-map-marker-alt"></i> Mumbai, India</p>
                            </div>
                        </div>
                        {/* A purely CSS generated barcode */}
                        <div className="barcode"></div>
                    </div>

                </motion.div>

            </div>

            {/* Bottom Copyright */}
            <div className="contact-bottom">
                <p>&copy; 2026 Khusur-Phusur & Shantam Pandit. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Contact;