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

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (blog.author.toString() !== req.user._id.toString())
      return res.status(403).json({ message: 'Not allowed to update this blog' });

    blog.title = req.body.title || blog.title;
    blog.body = req.body.body || blog.body;
    await blog.save();

    res.json({ blog });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update blog' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const isOwner = blog.author.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: 'Only the owner or admin can delete this blog' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete blog' });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name email');
    res.json({ blogs });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name email');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ blog });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blog' });
  }
};