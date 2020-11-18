const express = require('express');
const ctrl = require('../controllers');
const router = express.Router()

//routes
router.get('/', ctrl.blogs.index);
router.get('/:id', ctrl.blogs.show);
router.post('/', ctrl.blogs.create);
router.put('/:id', ctrl.blogs.update);
router.delete('/:id', ctrl.blogs.destroy);

module.exports = router;