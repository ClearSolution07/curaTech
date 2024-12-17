import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './contacthover.css';

const SocialContact = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 60, y: window.innerHeight / 2 });
  const [side, setSide] = useState('right');
  const containerRef = useRef(null);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    
    // Calculate offset of mouse from container's top-left
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.dataset.offsetX = e.clientX - rect.left;
      containerRef.current.dataset.offsetY = e.clientY - rect.top;
    }

    // Prevent text selection
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    if (containerRef.current) {
      const offsetX = parseFloat(containerRef.current.dataset.offsetX || 0);
      const offsetY = parseFloat(containerRef.current.dataset.offsetY || 0);

      // Calculate new position
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      // Constrain to window bounds
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const constrainedX = Math.max(0, Math.min(newX, windowWidth - containerWidth));
      const constrainedY = Math.max(0, Math.min(newY, windowHeight - containerHeight));

      setPosition({ x: constrainedX, y: constrainedY });
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Determine which side to snap to
    if (containerRef.current) {
      const windowWidth = window.innerWidth;
      const containerWidth = containerRef.current.offsetWidth;

      if (position.x < windowWidth / 2) {
        setSide('left');
        setPosition(prev => ({ ...prev, x: 0 }));
      } else {
        setSide('right');
        setPosition(prev => ({ 
          ...prev, 
          x: windowWidth - containerWidth 
        }));
      }
    }
  };

  useEffect(() => {
    // Add global event listeners
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        handleMouseMove(e);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`social-contact ${side === 'left' ? 'social-contact-left' : 'social-contact-right'} ${isDragging ? 'dragging' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: 'fixed',
        top: 0,
        left: 0,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
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