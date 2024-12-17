import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './contacthover.css';

const SocialContact = () => {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: 'https://facebook.com/yourpage',
      label: 'Facebook'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/yourhandle',
      label: 'Twitter'
    },
    {
      icon: <FaYoutube />,
      href: 'https://youtube.com/yourchannel',
      label: 'YouTube'
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/yourprofile',
      label: 'Instagram'
    },
    {
      icon: <FaPhone />,
      href: 'tel:+91 7002394679',
      label: 'Call Us'
    },
    {
      icon: <FaEnvelope />,
      href: 'mailto:curatechengineering@gmail.com',
      label: 'Email Us'
    }
  ];

  return (
    <div className="social-contact">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title={link.label}
        >
          {link.icon}
          <span className="icon-label">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialContact;