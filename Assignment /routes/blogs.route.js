const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogs.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/', protect, blogCtrl.createBlog);

module.exports = router;