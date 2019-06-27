const express = require( "express" );
const cors = require( "cors" );
const mongoose = require("mongoose")



var server = express( );
var port = process.env.PORT || 3000;

// Middleware
server.use( cors( ) );
server.use( express.json( ) );
server.use( express.urlencoded( { extended: false } ) );
server.use( function ( req, res, next ) {
    console.log( `New request: ${ req.method } ${ req.path } on ${ new Date( ) }` );
    next( );
});

// Data
var postsModel = require( "./data.js" );

server.get("/posts", function (req, res) {
  postsModel.find().then(function(posts){
    var reversed_list = [];
    posts.forEach(function (post) {
      reversed_list.unshift(post);
    })
    var response = {
      posts: posts
    }
    res.json(response)
  }).catch(function (error) {
    var response = {
      msg: error.message
    };
    res.status(400);
    res.json(response);
  })
  // console.log(req.body)
  // var response = {
  //   posts: postsModel.posts
  // };
  // res.json(response);
});
server.post("/posts", function (req, res) {
  postsModel.create({
    title:req.body.title,
    author: req.body.author,
     category: req.body.category,
     //date: default,
     image:req.body.image,
     text: req.body.text,

  }).then(function (new_post) {
    res.status(201);
    res.json(new_post)
  }).catch(function (error) {
    var response = {
      msg: error.message
    };
    res.status(400);
    res.json(response);
  })
  // var new_post= {
  //   title:req.body.title,
  //   author: req.body.author,
  //   category: req.body.category,
  //   date:req.body.date,
  //   image:req.body.image,
  //   text: req.body.text,
  // };
  // data.posts.unshift(new_post);
  // res.status(201);
  // res.send()
})

server.delete("/posts/:id", function (req, res) {
  postsModel.findByIdAndDelete(req.params.id).then(function () {
    res.status(204)
    res.send()
  }).catch(function (error) {
    var response = {
      msg: error.message
    };
    res.status(400);
    res.json(response);
  })
})
mongoose.connect("mongodb+srv://smamua:smamua@cluster0-1j385.mongodb.net/Blog?retryWrites=true&w=majority", {
  useNewUrlParser: true
}).then(function () {
  server.listen(port, function(){})
})
