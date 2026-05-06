import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './blog.css';

function BlogPost({ post }) {
  // Default sample post data
  const defaultPost = {
    title: "Article Placeholder",
    content: `
      <div class="placeholder-notice">
        <h2>📝 Content Placeholder</h2>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>To add your article, edit the <code>blog.js</code> file</li>
          <li>Find the blogPosts array with article ID matching this post</li>
          <li>Update the <code>title</code>, <code>excerpt</code>, <code>category</code>, and <code>content</code> fields</li>
          <li>Format your content in HTML. Example structure:</li>
        </ol>
        <pre><code>&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;p&gt;Your paragraph content&lt;/p&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;
&lt;p&gt;More content...&lt;/p&gt;</code></pre>
        <p><strong>Quick Tips:</strong></p>
        <ul>
          <li>Use &lt;h2&gt; for major sections</li>
          <li>Use &lt;h3&gt; for subsections</li>
          <li>Use &lt;p&gt; for paragraphs</li>
          <li>Use &lt;ul&gt; and &lt;li&gt; for bullet points</li>
          <li>Use &lt;strong&gt; and &lt;em&gt; for emphasis</li>
        </ul>
        <p style="margin-top: 2rem; padding: 1rem; background: #eef5fb; border-radius: 8px;">
          <strong>Author:</strong> Theo Burrows | <strong>Ready to add your content!</strong>
        </p>
      </div>
    `,
    date: new Date().toISOString().split('T')[0],
    readTime: "TBD",
    category: "General",
    author: "Theo Burrows",
    slug: "article-placeholder"
  };

  const blogPost = post || defaultPost;

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
          <Link to="/Blog" className="back-to-blog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor"/>
            </svg>
            Back to Blog
          </Link>
          <div className="blog-post-meta">
            <span className="blog-category">{blogPost.category}</span>
            <span className="blog-date">{new Date(blogPost.date).toLocaleDateString('en-ZA')}</span>
            <span className="blog-read-time">{blogPost.readTime}</span>
          </div>
          <h1>{blogPost.title}</h1>
          <p className="blog-author">By {blogPost.author}</p>
        </div>
      </div>

      <div className="blog-post-content container">
        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

        <div className="blog-post-footer">
          <div className="blog-share">
            <h3>Share this article</h3>
            <div className="share-buttons">
              <button className="share-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.77 7.46H14.5V5.32C14.5 4.86 14.86 4.5 15.32 4.5H16.5V2H14.5C12.84 2 11.5 3.34 11.5 5V7.46H9.5V9.96H11.5V22H14.5V9.96H17.5L18.77 7.46Z" fill="currentColor"/>
                </svg>
                Facebook
              </button>
              <button className="share-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.54 19.13C2.18 19.13 1.83 19.11 1.48 19.07C3.39 20.29 5.67 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.24C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
                </svg>
                Twitter
              </button>
              <button className="share-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.75 13.96C17.75 13.96 18.56 13.15 18.56 12.15C18.56 11.15 17.75 10.34 16.75 10.34C15.75 10.34 14.94 11.15 14.94 12.15C14.94 13.15 15.75 13.96 16.75 13.96ZM12.75 13.96C13.75 13.96 14.56 13.15 14.56 12.15C14.56 11.15 13.75 10.34 12.75 10.34C11.75 10.34 10.94 11.15 10.94 12.15C10.94 13.15 11.75 13.96 12.75 13.96ZM8.75 13.96C9.75 13.96 10.56 13.15 10.56 12.15C10.56 11.15 9.75 10.34 8.75 10.34C7.75 10.34 6.94 11.15 6.94 12.15C6.94 13.15 7.75 13.96 8.75 13.96ZM20.5 2H3.5C2.67 2 2 2.67 2 3.5V20.5C2 21.33 2.67 22 3.5 22H20.5C21.33 22 22 21.33 22 20.5V3.5C22 2.67 21.33 2 20.5 2ZM19 18.5H5V17H19V18.5ZM19 15H5V13.5H19V15Z" fill="currentColor"/>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>

          <div className="blog-related">
            <h3>Related Articles</h3>
            <div className="related-posts">
              <Link to="/Blog" className="related-post">
                <h4>View all blog articles</h4>
                <p>Return to the main blog page to explore more content</p>
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