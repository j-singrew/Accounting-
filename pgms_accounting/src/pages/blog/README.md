# Blog Templates

This directory contains the blog functionality for PGMS Accounting Services website.

## Files

- `blog.js` - Main blog listing page component
- `BlogPost.js` - Individual blog post template component
- `blog.css` - Styling for blog pages

## Adding New Blog Posts

### Option 1: Using the BlogPost Template

1. Import the BlogPost component in your routing
2. Create a new route like `/blog/your-post-slug`
3. Pass post data to the BlogPost component:

```javascript
import BlogPost from '../pages/blog/BlogPost';

const postData = {
  title: "Your Blog Post Title",
  content: `
    <p>Your blog post content in HTML format</p>
    <h2>Section Heading</h2>
    <p>More content...</p>
  `,
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Tax Planning",
  author: "PGMS Accounting Team",
  slug: "your-post-slug"
};

<Route path="/blog/your-post-slug" element={<BlogPost post={postData} />} />
```

### Option 2: Adding to the Blog Listing

1. Add your post data to the `blogPosts` array in `blog.js`
2. Create a corresponding route and component for the individual post

## Blog Post Content Guidelines

- Use semantic HTML (h2, h3, p, ul, ol, etc.)
- Keep content professional and relevant to accounting/finance
- Include relevant keywords for SEO
- Add internal links where appropriate
- Use short paragraphs for better readability

## Categories

Current categories include:
- Tax Planning
- VAT
- Payroll
- Financial Planning
- Technology
- General

## SEO Best Practices

- Use descriptive titles
- Include meta descriptions
- Add relevant keywords naturally
- Use proper heading hierarchy
- Include author information
- Add publication dates

## Styling

The blog uses the existing design system:
- Primary color: #0f2f55 (dark blue)
- Secondary color: #46617f (medium blue-gray)
- Accent color: #1e40af (lighter blue)
- Background: #f8fafc (light gray)

All styles are responsive and follow the site's design patterns.