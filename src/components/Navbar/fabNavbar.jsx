import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ ADDED THESE
import "./FabNavbar.css";

const FabNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    const navigate = useNavigate(); // ✅ INITIALIZE ROUTER NAVIGATE
    const location = useLocation(); // ✅ INITIALIZE ROUTER LOCATION

    // 1. Detect Scroll for "Capsule Mode"
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Active Section Detection
    useEffect(() => {
        // Only run intersection observer if we are on the home page
        if (location.pathname !== "/") return;

        const sections = document.querySelectorAll("main section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, [location.pathname]); // ✅ Re-run if path changes

    const navItems = [
        { id: "home", label: "Home" },
        { id: "facilitator", label: "Facilitator" },
        { id: "details-section", label: "Curriculum" },
        { id: "gallery", label: "Gallery" },
        { id: "articles", label: "Articles" },
        { id: "contact", label: "Contact" },
    ];

    const handleScrollTo = (id) => {
        setIsOpen(false);

        // ✅ 1. If clicking "Articles", route to the new page
        if (id === "articles") {
            navigate("/articles");
            setActive("articles");
            return;
        }

        // ✅ 2. If we are currently ON the Articles or Video page, route back Home first
        if (location.pathname !== "/") {
            navigate("/");
            // Tiny delay to let the home page load before scrolling down
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) {
                    const yOffset = -80;
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        // ✅ 3. Standard scrolling if we are already on the Home page
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* --- NAVBAR --- */}
            <motion.nav
                className={`navbar ${scrolled ? "scrolled" : ""}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="nav-container">

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScrollTo(item.id)}
                                /* Fix Active State for Articles Page */
                                className={`nav-link ${(active === item.id || (location.pathname === "/articles" && item.id === "articles")) ? "active" : ""}`}
                            >
                                {item.label}
                                {(active === item.id || (location.pathname === "/articles" && item.id === "articles")) && (
                                    <motion.div
                                        className="active-dot"
                                        layoutId="nav-dot"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <div className={`hamburger ${isOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </motion.nav>

            {/* --- MOBILE FULL SCREEN MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="mobile-links">
                            {navItems.map((item) => (
                                <button key={item.id} onClick={() => handleScrollTo(item.id)} className="mobile-link">
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FabNavbar;