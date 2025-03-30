import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

const services = [
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Create targeted email campaigns that drive engagement and conversions.',
    icon: '/images/services/email-marketing.png',
  },
  {
    id: 'mobile-marketing',
    title: 'Mobile Marketing',
    description: 'Reach customers on their mobile devices with targeted campaigns and apps.',
    icon: '/images/services/mobile-marketing.png',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Build brand presence and engage with customers across social platforms.',
    icon: '/images/services/social-media.png',
  },
  {
    id: 'search-advertising',
    title: 'Search Advertising',
    description: 'Drive qualified traffic through targeted search engine advertising.',
    icon: '/images/services/search-ads.png',
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    description: 'Grow your business through strategic partnership programs.',
    icon: '/images/services/affiliate.png',
  },
  {
    id: 'native-advertising',
    title: 'Native Advertising',
    description: 'Create seamless advertising experiences that blend with content.',
    icon: '/images/services/native-ads.png',
  },
  {
    id: 'sms-marketing',
    title: 'SMS Marketing',
    description: 'Connect with customers through targeted text message campaigns.',
    icon: '/images/services/sms.png',
  },
  {
    id: 'display-advertising',
    title: 'Display Advertising',
    description: 'Reach your audience with compelling visual advertisements.',
    icon: '/images/services/display-ads.png',
  },
  {
    id: 'video-advertising',
    title: 'Video Advertising',
    description: 'Engage audiences with powerful video content and campaigns.',
    icon: '/images/services/video-ads.png',
  }
];

const ServiceIcon = ({ src, alt }) => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className="service-icon-fallback">
        {alt.charAt(0)}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={handleError}
    />
  );
};

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Comprehensive digital marketing solutions to grow your business</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="service-card">
              <div className="service-icon">
                <ServiceIcon src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="learn-more">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;