"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";

const BlogPostsTemplate = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogAdmin");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs); 
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const defaultImage = "/default-image.jpg"; 

  return (
    <div className="main-container">
      <SEO pageTitle="Blog Posts" />
      <HeaderOne />
      <div className="container pt-100">
        <h2 className="mb-4">Blog Posts</h2>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <Image
  src={
    blog.imgUrl && blog.imgUrl.startsWith("http")
      ? blog.imgUrl
      : blog.imgUrl && blog.imgUrl.startsWith("/")
      ? blog.imgUrl
      : defaultImage
  }
  alt={blog.title || "Blog Image"}
  width={400}
  height={200}
  className="card-img-top"
/>
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">
                      {blog.description.length > 100
                        ? `${blog.description.substring(0, 100)}...`
                        : blog.description}
                    </p>
                    <Link href={`/blog/${blog.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    <small>By {blog.author} on {new Date(blog.date).toLocaleDateString()}</small>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs found. Please add some blogs.</p>
          )}
        </div>
      </div>
      <FooterOne />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostsTemplate;
