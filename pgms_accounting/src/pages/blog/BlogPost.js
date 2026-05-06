import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { blogPosts } from './blogData';
import './blog.css';

function BlogPost() {
  const { slug } = useParams();

  const blogPost = blogPosts.find(p => p.slug === slug);

  // If post not found
  if (!blogPost) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "2rem" }}>
          <h2>Post not found</h2>
          <Link to="/Blog">Back to Blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Helmet>
        <title>{blogPost.title} | PGMS Accounting Services</title>
        <meta name="description" content={`Read our latest article: ${blogPost.title}`} />
        <meta property="og:title" content={`${blogPost.title} | PGMS Accounting Services`} />
        <meta property="og:description" content={`Read our latest article: ${blogPost.title}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="blog-post-hero">
        <div className="container">
          {blogPost.image && (
            <div className="blog-post-hero-image">
              <img src={blogPost.image} alt={blogPost.title} />
            </div>
          )}

          <Link to="/Blog" className="back-to-blog">
            ← Back to Blog
          </Link>

          <div className="blog-post-meta">
            <span className="blog-category">{blogPost.category}</span>
            
            <span className="blog-date">
              {new Date(blogPost.date).toLocaleDateString('en-ZA')}
            </span>
            <span className="blog-read-time">{blogPost.readTime}</span>
          </div>

          <h1>{blogPost.title}</h1>
          <div className="blog-author">
            <p>By {blogPost.author.name}</p>
  <img
    src={blogPost.author.image}
    alt={blogPost.author.name}
    className="author-avatar"
  />

</div>
        </div>
      </div>

      <div className="blog-post-content container">
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        <div className="blog-post-footer">


          <div className="blog-related">
            <h3>Related Articles</h3>
            <div className="related-posts">
              <Link to="/Blog" className="related-post">
                <h4>View all blog articles</h4>
                <p>Return to the main blog page</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogPost;