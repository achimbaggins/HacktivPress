var express = require('express');
var router = express.Router();

const articleControl = require('../controllers/article');

router.get('/', articleControl.all)
router.post('/', articleControl.create)
router.get('/:slug', articleControl.getBySlug)
router.put('/:slug', articleControl.update)
router.delete('/:id', articleControl.remove)

module.exports = router;
