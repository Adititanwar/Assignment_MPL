const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogs.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/', protect, blogCtrl.createBlog);
router.put('/:id', protect, blogCtrl.updateBlog);
router.delete('/:id', protect, blogCtrl.deleteBlog);

module.exports = router;