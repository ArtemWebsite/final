"use client";
import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    // Check if the user has already given consent
    const consent = JSON.parse(localStorage.getItem('cookieConsent'));
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(consent);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { analytics: true, marketing: true };
    setPreferences(consent);
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent = { analytics: false, marketing: false };
    setPreferences(consent);
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div style={bannerStyles}>
        <p style={textStyles}>
          We use cookies to enhance your experience. Please review and manage your preferences in
          our <a href="/privacy-policy" style={linkStyles}>Privacy Policy</a>.
        </p>
        <div style={buttonsContainer}>
          <button onClick={handleAcceptAll} style={buttonStyles}>Accept All</button>
          <button onClick={handleRejectAll} style={buttonStyles}>Reject All</button>
          <button onClick={() => setShowBanner(false)} style={buttonStyles}>Preferences</button>
        </div>
        {showBanner && (
          <div style={preferencesStyles}>
            <label style={labelStyles}>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
              />
              Enable Analytics Cookies
            </label>
            <label style={labelStyles}>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              />
              Enable Marketing Cookies
            </label>
            <button onClick={handleSavePreferences} style={buttonStyles}>Save Preferences</button>
          </div>
        )}
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
  padding: '1rem',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const textStyles = { margin: '0 0 1rem 0' };
const linkStyles = { color: '#fff', textDecoration: 'underline' };
const buttonStyles = {
  backgroundColor: '#fff',
  color: '#333',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  margin: '0.25rem',
};
const buttonsContainer = { display: 'flex', gap: '0.5rem' };
const preferencesStyles = { marginTop: '1rem', display: 'flex', flexDirection: 'column' };
const labelStyles = { margin: '0.5rem 0', display: 'flex', alignItems: 'center' };

export default CookieConsent;