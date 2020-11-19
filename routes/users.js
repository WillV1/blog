const express = require('express');
const ctrl = require('../controllers');
const router = express.Router()

//routes
router.get('/', ctrl.users.index);
router.get('/:id', ctrl.users.show);
// router.post('/', ctrl.users.create);
router.put('/:id', ctrl.users.update);
router.delete('/:id', ctrl.users.destroy);

module.exports = router;