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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogAdmin");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs);
        } else {
          setError("Failed to fetch blogs.");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("An error occurred while fetching blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const defaultImage = "/assets/img/avatar/avatar-1.jpg";


  return (
    <div className="main-container">
      <SEO pageTitle="Blog Posts" />
      <HeaderOne />
      <div className="container pt-100">
        <h2 className="mb-4">Blog Posts</h2>

        {loading ? (
          <p>Loading blogs...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : blogs.length > 0 ? (
          <div className="row">
            {blogs.map((blog, index) => (
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
        onError={(e) => (e.target.src = defaultImage)} // Handle broken images
      />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">
                      {blog.description
                        ? blog.description.length > 100
                          ? `${blog.description.substring(0, 100)}...`
                          : blog.description
                        : "No description available."}
                    </p>
                    <Link href={`/blog/${blog.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    <small>
                      By {blog.author || "Anonymous"} on{" "}
                      {blog.date
                        ? new Date(blog.date).toLocaleDateString()
                        : "N/A"}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No blogs found. Please add some blogs.</p>
        )}
      </div>
      <FooterOne />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostsTemplate;
