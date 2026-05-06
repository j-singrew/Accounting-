import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './blog.css';

export const blogPosts = [
    {
      id: 1,
      title: "[Article 1] - Ready for your content",
      excerpt: "📝 Click 'Read More' to add your article content. Copy and paste your text into the blog post editor.",
      date: "2024-01-15",
      readTime: "TBD",
      category: "Business",
      image: "/blog/article-1.jpg",
      slug: "article-placeholder-1",
      author: "Theo Burrows",
      content: "<p>Your article content goes here. Edit this placeholder with your full article text.</p>"
    },
    {
      id: 2,
      title: "[Article 2] - Ready for your content",
      excerpt: "📝 Click 'Read More' to add your article content. Copy and paste your text into the blog post editor.",
      date: "2024-01-10",
      readTime: "TBD",
      category: "Business",
      image: "/blog/article-2.jpg",
      slug: "article-placeholder-2",
      author: "Theo Burrows",
      content: "<p>Your article content goes here. Edit this placeholder with your full article text.</p>"
    },
    {
      id: 3,
      title: "[Article 3] - Ready for your content",
      excerpt: "📝 Click 'Read More' to add your article content. Copy and paste your text into the blog post editor.",
      date: "2024-01-05",
      readTime: "TBD",
      category: "Business",
      image: "/blog/article-3.jpg",
      slug: "article-placeholder-3",
      author: "Theo Burrows",
      content: "<p>Your article content goes here. Edit this placeholder with your full article text.</p>"
    },
    {
      id: 4,
      title: "[Article 4] - Ready for your content",
      excerpt: "📝 Click 'Read More' to add your article content. Copy and paste your text into the blog post editor.",
      date: "2023-12-28",
      readTime: "TBD",
      category: "Business",
      image: "/blog/article-4.jpg",
      slug: "article-placeholder-4",
      author: "Theo Burrows",
      content: "<p>Your article content goes here. Edit this placeholder with your full article text.</p>"
    },
    {
      id: 5,
      title: "[Article 5] - Ready for your content",
      excerpt: "📝 Click 'Read More' to add your article content. Copy and paste your text into the blog post editor.",
      date: "2023-12-20",
      readTime: "TBD",
      category: "Business",
      image: "/blog/article-5.jpg",
      slug: "article-placeholder-5",
      author: "Theo Burrows",
      content: "<p>Your article content goes here. Edit this placeholder with your full article text.</p>"
    },
    {
      id: 6,
      title: "[Article 6] - Ready for your content",
      excerpt: "📝 Click 'Read More' to add your article content. Copy and paste your text into the blog post editor.",
      date: "2023-12-15",
      readTime: "TBD",
      category: "Business",
      image: "/blog/article-6.jpg",
      slug: "article-placeholder-6",
      author: "Theo Burrows",
      content: "<p>Your article content goes here. Edit this placeholder with your full article text.</p>"
    }
  ];

  const categories = ["All", "Tax Planning", "VAT", "Payroll", "Financial Planning", "Technology"];

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Blog | PGMS Accounting Services</title>
        <meta
          name="description"
          content="Stay informed with the latest accounting tips, tax updates, and business financial advice from PGMS Accounting Services."
        />
        <meta property="og:title" content="Blog | PGMS Accounting Services" />
        <meta property="og:description" content="Expert accounting insights and business financial guidance." />
        <meta property="og:url" content="https://www.edenbiz.info/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="blog-hero">
        <div className="container">
          <h1>Accounting Insights & Business Tips</h1>
          <p>Stay informed with expert advice on tax planning, financial management, and business growth strategies.</p>
        </div>
      </div>

      <div className="blog-content container">
        <div className="blog-header">
          <h2>Latest Articles</h2>
          <div className="blog-categories">
            {categories.map(category => (
              <button key={category} className="category-btn active">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card reveal">
              <div className="blog-card-image">
                <div className="blog-placeholder-image">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#46617f"/>
                  </svg>
                </div>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('en-ZA')}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="read-more-btn">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <h2>Need Expert Accounting Advice?</h2>
          <p>Our team of experienced accountants is here to help your business thrive.</p>
          <Link to="/Contact" className="cta-btn">Get in Touch</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;