const Article = require('../models/Article');
const User = require('../models/User');
const achimSlug = require('achim-slug');

var all = (req, res) => {
  Article.find({}).sort('-updatedAt')
  .populate('author', 'username')
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var create = (req, res) => {
  var myslug = achimSlug(`${req.body.title}`)
  Article.create({
    title: req.body.title,
    slug: myslug,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var getBySlug = (req, res) => {
  Article.find({slug:req.params.slug})
  .populate('author', 'username')
  .then(result => res.send(result[0]))
  .catch(err => res.send('halaman tak tersedia'))
}

var getByCat = (req, res) => {
  Article.find({category:req.params.cat})
  .populate('author', 'username')
  .then(result => res.send(result))
  .catch(err => res.send('halaman tak tersedia'))
}

var getByAuthor = (req, res) => {
  User.find({username: req.params.author})
  .then(result => {
    if(result.length > 0){
      Article.find({author: result[0]._id})
      .populate('author', 'username')
      .then(ok => res.send(ok))
    } else {
      res.send('data tidak ditemukan')
    }
  })
}

var update = (req, res) => {
  var myslug = achimSlug(`${req.body.title}`)
  var dataUpdate = {
    title: req.body.title,
    slug: myslug,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  }
  Article.update({slug:req.params.slug}, {$set: dataUpdate})
  .populate('author', 'username')
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var remove = (req, res) => {
  Article.remove({_id:req.params.id})
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

module.exports = {
  remove, update, getBySlug, create, all, getByCat, getByAuthor
}
