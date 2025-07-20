const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogs.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/', protect, blogCtrl.createBlog);
router.put('/:id', protect, blogCtrl.updateBlog);
router.delete('/:id', protect, blogCtrl.deleteBlog);
router.get('/', blogCtrl.getAllBlogs);
router.get('/:id', blogCtrl.getBlogById);

module.exports = router;