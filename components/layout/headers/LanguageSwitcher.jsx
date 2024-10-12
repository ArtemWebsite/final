// components/LanguageSwitcher.js
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,ar,zh-CN,de,tr', // Add supported languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Add the Google Translate script
    if (!window.google) {
      addGoogleTranslateScript();
      window.googleTranslateElementInit = googleTranslateElementInit; // Set the init function globally
    } else {
      googleTranslateElementInit(); // Init directly if google already exists
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default LanguageSwitcher;
