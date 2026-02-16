import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./videos.css";

const Videos = () => {
    const navigate = useNavigate();

    // Your local video paths inside the public folder
    const reviewVideos = [
        "/videos/1.mp4",
        "/videos/2.mp4",
        "/videos/3.mp4",
        "/videos/4.mp4"
        // You can easily add more here later!
    ];

    return (
        <div className="videos-page">

            {/* Minimal Back Button */}
            <div className="videos-nav">
                <button className="back-btn" onClick={() => navigate("/")}>
                    ← Back to Workshop
                </button>
            </div>

            {/* Header */}
            <motion.div
                className="videos-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="subtitle">Real Experiences</span>
                <h1 className="hindi-title">
                    Voices of <span className="serif-highlight">Change</span>
                </h1>
            </motion.div>

            {/* Video Grid */}
            <div className="video-grid">
                {reviewVideos.map((src, index) => (
                    <motion.div
                        className="video-card"
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Native HTML5 Video Player */}
                        <video controls preload="metadata" className="custom-video">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Videos;