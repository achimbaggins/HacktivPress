const User = require('../models/User');
const achimCrypto = require('achim-crypto');
const achimSalt = require('achim-salt');
const jwt = require('jsonwebtoken');

var login = (req, res) => {
  User.find({
    username: req.body.username
  })
  .then(result => {
    if(result.length > 0){
      let pass = achimCrypto(req.body.password, result[0].secret)
      if(result[0].password === pass){
        var dataToken = {
          id: `${result[0]._id}`,
          username: `${result[0].username}`
        }

        var token = jwt.sign(dataToken, 'apalahdisini')
        res.send({
          token: token, id: result[0]._id, username: result[0].username
        })
      } else {
        res.send('password salah')
      }
    } else {
      res.send('user tidak ditemukan')
    }
  })
}

var register = (req, res) => {
  var secret = achimSalt()
  var pass = achimCrypto(req.body.password, secret)
  User.find({
    username: req.body.username
  })
  .then(result => {
    if(result.length == 0){
      User.create({
        username: req.body.username,
        password: pass,
        secret: secret
      })
      .then(hasil => res.send(hasil))
    } else {
      res.send('user sudah terdaftar')
    }
  })
}

module.exports = {login, register};
