var express = require('express');
var router = express.Router();
const userControl = require('../controllers/user')
const articleControl = require('../controllers/article')

router.get('/', articleControl.all);
router.get('/category/:cat', articleControl.getByCat)
router.get('/author/:author', articleControl.getByAuthor)
router.post('/register', userControl.register)
router.post('/login', userControl.login)

module.exports = router;
