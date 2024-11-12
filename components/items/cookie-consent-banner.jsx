"use client";
import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div style={bannerStyles}>
        <p style={textStyles}>
          We use cookies to improve your experience on our website. By continuing to browse, you accept our
          <a href="/privacy-policy" style={linkStyles}>Privacy Policy</a>.
        </p>
        <button onClick={acceptCookies} style={buttonStyles}>Accept</button>
      </div>
    )
  );
};

const bannerStyles = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  zIndex: '1000',
};

const textStyles = {
  margin: '0',
};

const linkStyles = {
  color: '#fff',
  textDecoration: 'underline',
  marginLeft: '5px',
};

const buttonStyles = {
  backgroundColor: '#fff',
  color: '#333',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
};

export default CookieConsent;