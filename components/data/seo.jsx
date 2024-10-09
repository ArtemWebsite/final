// components/SEO.js
import { useEffect } from "react";
import Head from "next/head";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};

export default SEO;
