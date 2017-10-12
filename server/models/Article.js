const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  slug: String,
  content: String,
  category: String,
  author: {type: Schema.Types.ObjectId, ref: "User"}
},{
  timestamps: true
})

const Article = mongoose.model('Article', articleSchema)
module.exports = Article;
