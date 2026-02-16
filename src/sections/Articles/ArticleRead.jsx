import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "../../data/articlesData";
import "./ArticleRead.css";

const ArticleRead = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the specific article
    const article = articles.find(a => a.id === id);

    if (!article) return <div className="not-found">Article not found</div>;

    return (
        <div className="article-read-page">
            <div className="read-nav">
                <button className="back-btn" onClick={() => navigate("/articles")}>
                    ← Back to Articles
                </button>
            </div>

            <motion.article
                className="read-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="read-header">
                    <div className="read-meta">
                        <span>{article.date}</span>
                        <span className="dot">•</span>
                        <span>{article.readTime}</span>
                    </div>
                    <h1>{article.title}</h1>
                </div>

                <div className="read-hero-image">
                    <img src={article.image} alt={article.title} />
                </div>

                {/* React dangerouslySetInnerHTML lets us render the HTML from the data file safely */}
                <div
                    className="read-body"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </motion.article>
        </div>
    );
};

export default ArticleRead;