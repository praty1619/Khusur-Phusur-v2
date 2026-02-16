import { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const Gallery = () => {
    // Generate the array of 21 images
    const initialImages = Array.from({ length: 21 }, (_, i) => i + 1);

    // State to hold the current order of the cards
    const [cards, setCards] = useState(initialImages);

    // Move the top card to the back (Next)
    const nextCard = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            const topCard = newCards.shift();
            newCards.push(topCard);
            return newCards;
        });
    };

    // Bring the bottom card to the front (Previous)
    const prevCard = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            const bottomCard = newCards.pop();
            newCards.unshift(bottomCard);
            return newCards;
        });
    };

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery-container">

                {/* Header */}
                <motion.div
                    className="gallery-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="subtitle">Visual Diary</span>
                    <h2 className="section-title">
                        Moments of <span className="serif-highlight">Stillness</span>
                    </h2>
                </motion.div>

                {/* The Interactive Stack Container */}
                <div className="stack-wrapper">

                    {/* Left Swipe Cue (Previous Card) */}
                    <motion.div
                        className="swipe-cue cue-left"
                        animate={{ x: [-10, 0, -10] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        onClick={prevCard}
                    >
                        {/* CHANGED: width and height are now 100% */}
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M10 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                        </svg>
                    </motion.div>

                    {/* The Card Stack */}
                    <div className="stack-container">
                        {/* We only render the top 4 cards for performance and visual clarity */}
                        {cards.slice(0, 4).map((cardId, index) => {
                            const isTop = index === 0;

                            return (
                                <motion.div
                                    key={cardId} // Crucial for Framer Motion to track the card
                                    layout // This magic prop animates the card when its index changes!
                                    className="stacked-card"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1 - index * 0.15, // Cards behind get slightly transparent
                                        scale: 1 - index * 0.05, // Cards behind get slightly smaller
                                        y: index * 15, // Reduced vertical spacing for a tighter stack
                                        rotate: index % 2 === 0 ? index * 1.5 : -index * 1.5, // Alternating subtle tilt
                                        zIndex: 10 - index, // Ensure correct stacking order
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}

                                    // Drag interactions (only active on the top card)
                                    drag={isTop ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }} // Snaps back if not swiped far enough
                                    dragElastic={0.7} // Slightly more elastic feel
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipeThreshold = 100;
                                        // If dragged far enough or fast enough, trigger swipe
                                        if (Math.abs(offset.x) > swipeThreshold || Math.abs(velocity.x) > 500) {
                                            nextCard();
                                        }
                                    }}
                                    // Also allow clicking to cycle through
                                    onClick={() => isTop && nextCard()}
                                >
                                    {/* The Polaroid Frame styling */}
                                    <div className="polaroid-frame">
                                        <img
                                            src={`/Gallery/${cardId}.webp`}
                                            alt={`Workshop moment ${cardId}`}
                                            draggable="false"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Swipe Cue (Next Card) */}
                    <motion.div
                        className="swipe-cue cue-right"
                        animate={{ x: [10, 0, 10] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        onClick={nextCard}
                    >
                        {/* CHANGED: width and height are now 100% */}
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M14 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12H3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                        </svg>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Gallery;