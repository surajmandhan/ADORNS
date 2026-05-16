
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User, Share2 } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: "The Art of Layering Necklaces",
    excerpt: "Learn how to combine different lengths, textures, and styles to create a sophisticated, personalized look that speaks to your unique aesthetic.",
    date: "Oct 10, 2024",
    author: "Elena Vance",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1515562141224-7502c206979a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Choosing the Perfect Engagement Ring",
    excerpt: "A comprehensive guide to diamonds, settings, and finding 'the one'. We break down the 4Cs and popular metal choices for your milestone moment.",
    date: "Oct 05, 2024",
    author: "Marc Jacobs",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ethics in Modern Jewelry Design",
    excerpt: "Why sustainability is the new luxury in the world of high jewelry. Discover our commitment to ethical sourcing and lab-grown brilliance.",
    date: "Sep 28, 2024",
    author: "Sarah Chen",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1535632063271-cebd2937962c?auto=format&fit=crop&q=80&w=800"
  },
  {
      title: "The Rise of Demifine Jewelry",
      excerpt: "Bridging the gap between fashion and fine jewelry. Explore the new category that is taking the fashion world by storm.",
      date: "Sep 15, 2024",
      author: "James Wilson",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1611085583191-a3b13bc24e2d?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogPage: React.FC = () => {
  const featured = BLOG_POSTS[0];
  const latest = BLOG_POSTS.slice(1);

  return (
    <div className="blog-page-v2">
      <section className="blog-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="u-mono uppercase tracking-tighter">The Journal</h1>
            <p>Curated stories of craftsmanship, heritage, and the evolution of modern style.</p>
          </motion.div>
        </div>
      </section>

      <div className="blog-container container">
        {/* Featured Post */}
        <motion.div 
            className="featured-post"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="featured-image">
                <img src={featured.image} alt={featured.title} />
            </div>
            <div className="featured-content">
                <span className="category-tag u-mono">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="post-footer">
                    <div className="author-info">
                        <User size={16} />
                        <span>{featured.author}</span>
                        <span className="dot"></span>
                        <Clock size={16} />
                        <span>{featured.date}</span>
                    </div>
                    <button className="read-btn">Read Full Story <ArrowRight size={18} /></button>
                </div>
            </div>
        </motion.div>

        {/* Latest Posts Grid */}
        <div className="blog-grid-v2">
          {latest.map((post, i) => (
            <motion.article 
              key={i} 
              className="blog-card-v2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <span className="category-tag u-mono">{post.category}</span>
              </div>
              <div className="card-body">
                <div className="card-meta u-mono">
                  <span>{post.date}</span>
                  <button className="share-btn"><Share2 size={14} /></button>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more-link">
                  Continue Reading <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="blog-newsletter container">
          <div className="newsletter-box">
              <h3>Join Our Inner Circle</h3>
              <p>Receive monthly style guides, early access to new collections, and exclusive stories from our master craftsmen.</p>
              <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit">Subscribe</button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default BlogPage;
