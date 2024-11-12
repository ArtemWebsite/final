"use client";
import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
   
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
      document.body.style.overflow = 'hidden'; 
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    document.body.style.overflow = 'auto'; 
  };

  return (
    showBanner && (
      <div style={overlayStyles}>
        <div style={bannerStyles}>
          <p style={textStyles}>
            We use cookies to improve your experience on our website. By continuing to browse, you accept our
            <a href="/privacy-policy" style={linkStyles}>Privacy Policy</a>.
          </p>
          <button onClick={acceptCookies} style={buttonStyles}>Accept</button>
        </div>
      </div>
    )
  );
};

const overlayStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end', 
  zIndex: '1000',
};

const bannerStyles = {
  width: '100%',
  backgroundColor: '#8cd2be',
  color: '#000',
  fontSize: '14px',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const textStyles = {
  margin: '0',
};

const linkStyles = {
  color: '#000',
  textDecoration: 'underline',
  marginLeft: '5px',
};

const buttonStyles = {
  backgroundColor: '#fff',
  color: '#000',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
};

export default CookieConsent;