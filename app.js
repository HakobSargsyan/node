
/**
 * Module dependencies.
 */
var express = require('express')
  ,fs = require('fs')
  , routes = require('./routes');

//Express create a new Server
var app = module.exports = express.createServer();

// Configuration ,set and use some midelwares
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.favicon());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

//Error handling with errorHandler midleware for development
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//Error handling with errorHandler midelware for production
app.configure('production', function(){
  app.use(express.errorHandler());
});

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route(app);
  }
});


//listen server with 3000 port
app.listen(5000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
