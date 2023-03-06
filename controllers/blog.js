import Blog from "../models/Blog.js"

export const createBlog = async (req, res) => {
    const newBlog = new Blog(req.body);
  
    try {
      const savedBlog = await newBlog.save();
      res.status(200).json(savedBlog);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  export const updateBlog = async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedBlog);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
  };
  export const deleteBlog = async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id),
        res.status(200).json("Blog has been deleted");
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
  };
  export const getBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      res.status(200).json(blog);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
  };
  export const getBlogs = async (req, res) => {
      const { min, max, ...others}=req.query;
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
  };