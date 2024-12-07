"use client";
import SEO from "@/components/data/seo";
import React, { useState } from "react";
import HeaderOne from "@/components/layout/headers/header-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";

const BlogController = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    metaTitle: "",
    metaDescription: "",
    description: "",
    imgUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Blog saved successfully!");
        setFormData({
          title: "",
          author: "",
          date: "",
          metaTitle: "",
          metaDescription: "",
          description: "",
          imgUrl: "",
        });
      } else {
        alert("Failed to save blog.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <SEO pageTitle="Blog Admin" />

      <HeaderOne />
      <div className="container py-5">
        <div className="progress" style={{ height: "5px" }}>
          <div className="progress-bar" style={{ width: "0%" }}></div>
        </div>

        <form id="feedbackForm" className="mt-4" onSubmit={handleSubmit}>
          <h1 className="mb-4">Add Blog Post</h1>

          <div className="mb-4">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="form-control"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="metaTitle" className="form-label">
                Meta Title
              </label>
              <input
                type="text"
                id="metaTitle"
                name="metaTitle"
                className="form-control"
                placeholder="Meta Title"
                value={formData.metaTitle}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="metaDescription" className="form-label">
                Meta Description
              </label>
              <input
                type="text"
                id="metaDescription"
                name="metaDescription"
                className="form-control"
                placeholder="Meta Description"
                value={formData.metaDescription}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="metaDescription" className="form-label">
              Image Url
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              className="form-control"
              placeholder="Image Url"
              value={formData.imgUrl}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="3"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default BlogController;
