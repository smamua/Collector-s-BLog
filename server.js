const express = require( "express" );
const cors = require( "cors" );


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
var data = require( "./data.js" );

server.get("/posts", function (req, res) {
  console.log(req.body)
  var response = {
    posts: data.posts
  };
  res.json(response);
});
server.post("/posts", function (req, res) {
  var new_post= {
    title:req.body.title,
    author: req.body.author,
    category: req.body.category,
    date:req.body.date,
    image:req.body.image,
    text: req.body.text,
  };
  data.posts.unshift(new_post);
  res.status(201);
  res.send()
})
server.listen(port, function(){})
