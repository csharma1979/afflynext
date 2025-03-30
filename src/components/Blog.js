import React from 'react';
import './Blog.scss';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Maximizing ROI with Email Marketing Campaigns',
      excerpt: 'Learn how to create effective email marketing strategies that drive conversions and boost your return on investment.',
      image: '/blog/email-marketing.jpg',
      category: 'Email Marketing',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Mobile Marketing Trends for 2024',
      excerpt: 'Discover the latest mobile marketing strategies and technologies that are shaping the digital landscape.',
      image: '/blog/mobile-marketing.jpg',
      category: 'Mobile Marketing',
      date: 'March 12, 2024'
    },
    {
      id: 3,
      title: 'Social Media Marketing: Building Engaging Communities',
      excerpt: 'Tips and strategies for creating meaningful connections with your audience through social media platforms.',
      image: '/blog/social-media.jpg',
      category: 'Social Media',
      date: 'March 10, 2024'
    },
    {
      id: 4,
      title: 'Search Advertising: Advanced PPC Strategies',
      excerpt: 'Advanced techniques for optimizing your pay-per-click campaigns and improving search visibility.',
      image: '/blog/search-ads.jpg',
      category: 'Search Advertising',
      date: 'March 8, 2024'
    },
    {
      id: 5,
      title: 'Affiliate Marketing Success Stories',
      excerpt: 'Real-world examples of successful affiliate marketing campaigns and lessons learned.',
      image: '/blog/affiliate.jpg',
      category: 'Affiliate Marketing',
      date: 'March 5, 2024'
    },
    {
      id: 6,
      title: 'Native Advertising: The Art of Seamless Integration',
      excerpt: 'How to create native ads that engage audiences while maintaining authenticity and trust.',
      image: '/blog/native-ads.jpg',
      category: 'Native Advertising',
      date: 'March 3, 2024'
    },
    {
      id: 7,
      title: 'SMS Marketing: Engagement Through Text',
      excerpt: 'Best practices for creating effective SMS marketing campaigns that drive results.',
      image: '/blog/sms-marketing.jpg',
      category: 'SMS Marketing',
      date: 'March 1, 2024'
    },
    {
      id: 8,
      title: 'Display Advertising: Creative Design Tips',
      excerpt: 'Design principles and strategies for creating compelling display ads that capture attention.',
      image: '/blog/display-ads.jpg',
      category: 'Display Advertising',
      date: 'February 28, 2024'
    },
    {
      id: 9,
      title: 'Video Marketing: Storytelling for Brands',
      excerpt: 'How to use video content to tell compelling brand stories and engage your audience.',
      image: '/blog/video-marketing.jpg',
      category: 'Video Marketing',
      date: 'February 25, 2024'
    }
  ];

  return (
    <div className="blog">
      <section className="hero-section">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights and strategies for digital marketing success</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="date">{post.date}</div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;