/* eslint-disable */
'use strict';

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');

function bootstrapServer(options) {
  // Load environment variables
  dotenv.config();

  var app = express();
  var port = options.port || process.env.PORT || 3000;

  app.set('port', port);

  // Serve static files from the 'public' directory
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Set security headers
  app.use(function (req, res, next) {
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    next();
  });

  // Allow the main app to initialize routes and middleware
  if (options.init) {
    options.init(app);
  }

  // For any other routes, send the index.html file from the public directory
  app.get('*', function (req, res, next) {
    var indexPath = path.join(process.cwd(), 'public/index.html');
    if (path.extname(req.path).length > 0) {
      // If the request has a file extension, it's likely a missing asset, so we'll treat it as a 404
      next();
    } else {
      res.sendFile(indexPath);
    }
  });

  // 404 handler
  app.use(function (req, res) {
    res.status(404).sendFile(path.join(process.cwd(), 'public/404.html'));
  });

  function startServer() {
    return app.listen(port, function () {
      console.log('Server running on port ' + port);
    });
  }

  return {
    app: app,
    start: startServer,
  };
}

module.exports = { bootstrapServer };
