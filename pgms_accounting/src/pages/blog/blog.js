import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './blog.css';

import { blogPosts } from './blogData';

const categories = ["All", "Tax Planning", "VAT", "Payroll", "Financial Planning", "Technology"];

const Blog = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Blog | PGMS Accounting Services</title>
        <meta
          name="description"
          content="Stay informed with the latest accounting tips, tax updates, and business financial advice."
        />
      </Helmet>

      <div className="blog-hero">
        <div className="container">
          <h1>Accounting Insights & Business Tips</h1>
          <p>
            Stay informed with expert advice on tax planning, financial management,
            and business growth strategies.
          </p>
        </div>
      </div>

      <div className="blog-content container">
        <div className="blog-header">
          <h2>Latest Articles</h2>

          <div className="blog-categories">
            {categories.map(category => (
              <button key={category} className="category-btn">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <div className="blog-placeholder-image">
                  📄
                </div>
              </div>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-ZA')}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <h2>Need Expert Accounting Advice?</h2>
          <p>Our team is here to help your business grow.</p>
          <Link to="/Contact" className="cta-btn">
            Get in Touch
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;