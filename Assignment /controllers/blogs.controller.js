const Blog = require('../models/blogs.model');

exports.createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;
    const blog = await Blog.create({
      title,
      body,
      author: req.user._id,
    });
    res.status(201).json({ blog });
  } catch (err) {
    res.status(500).json({ message: 'Blog creation failed', error: err.message });
  }
};