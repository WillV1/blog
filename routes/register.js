const express = require('express');
const ctrl = require('../controllers');
const router = express.Router()

//routes
router.post('/', ctrl.users.create);

module.exports = router;