"use client";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="../fav.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
