"use client";
import React, { useState } from "react";

export default function UploadImage({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleFileChange = async (e) => {
  const selectedFile = e.target.files?.[0];
  if (!selectedFile) return;

  setFile(selectedFile);

  const data = new FormData();
  data.set("file", selectedFile);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log("Image URL:", result.url);
      if (result.url.startsWith("http")) {
        alert("Image uploaded successfully!");
        onUploadSuccess(result.url);
      } else {
        alert("Invalid image URL received.");
      }
    } else {
      alert(`Failed to upload image: ${result.message}`);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    alert("Error uploading image.");
  }
};

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
}
