"use client";
import { useEffect } from "react";
import Head from "next/head";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    // Set page title
    document.title = pageTitle;

    // Log to check script execution
    console.log("SEO component mounted - adding Google Tag Manager scripts");

    // Create Google Tag Manager script element
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-D8VGNLBBFW";
    script.async = true;

    // Append script to head
    document.head.appendChild(script);

    // Create inline script for gtag
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D8VGNLBBFW');
      console.log('Google Tag Manager initialized');
    `;

    document.head.appendChild(inlineScript);

    // Cleanup on unmount (optional)
    return () => {
      console.log("SEO component unmounted");
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, [pageTitle]);

  return (
    <Head>
      <meta
        name="google-site-verification"
        content="eiIyJqIsNB_K_sqBmrANL4RNrjhvkZCd--QP4TwDCQ4"
      />
    </Head>
  );
};

export default SEO;
