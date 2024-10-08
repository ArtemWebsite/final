"use client";
import { useEffect } from "react";
import Head from "next/head";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    // Google Tag Manager Script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-D8VGNLBBFW";
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D8VGNLBBFW');
    `;
    document.head.appendChild(inlineScript);

    document.title = pageTitle;

    return () => {
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
