import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { articles } from "../../data/articlesData";
import "./Articles.css";

const Articles = () => {
    const navigate = useNavigate();

    return (
        <div className="articles-page">
            <div className="articles-nav">
                <button className="back-btn" onClick={() => navigate("/")}>
                    ← Back to Home
                </button>
            </div>

            <motion.div
                className="articles-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="subtitle">Journal</span>
                <h1 className="hindi-title">
                    Read & <span className="serif-highlight">Reflect</span>
                </h1>
            </motion.div>

            <div className="articles-grid">
                {articles.map((article, index) => (
                    <motion.div
                        className="article-card"
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => navigate(`/article/${article.id}`)}
                    >
                        <div className="article-image">
                            <img src={article.image} alt={article.title} />
                        </div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span>{article.date}</span>
                                <span className="dot">•</span>
                                <span>{article.readTime}</span>
                            </div>
                            <h3>{article.title}</h3>
                            <p>{article.excerpt}</p>
                            <span className="read-more">Read Article →</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Articles;