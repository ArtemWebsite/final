import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const blog = new Blog(req.body); // Create a new blog post
      await blog.save();
      res
        .status(200)
        .json({ success: true, message: "Blog saved successfully!" });
    } catch (error) {
      console.error("Error saving blog:", error);
      res.status(500).json({ success: false, error: "Failed to save blog" });
    }
  } else if (req.method === "GET") {
    try {
      const blogs = await Blog.find(); // Retrieve all blog posts
      res.status(200).json({ success: true, blogs });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ success: false, error: "Failed to fetch blogs" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
