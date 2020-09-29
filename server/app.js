var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var authRouter = require('./auth');

var authMiddleware = require('./auth/middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/users', authMiddleware.ensureLoggedIn, usersRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || res.statusCode || 500);
  res.render('error');
});

/**
* CONFIG SERVER HTTP IN DEFAULT PORT
*/

var { normalizePort, onListening, onError } = require('./helpers/index')
/**
 * Module dependencies.
 */
var http = require('http');

/**
* Get port from environment and store in Express.
*/

var port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

/**
* Create HTTP server.
*/

var server = http.createServer(app);
/**
* Listen on provided port, on all network interfaces.
*/

/**
* WEBSOCKET
*/
var io = require('socket.io')(server);

// Show current user watch the page
let currentConnections = {};
let numberOfConnections = () => Object.keys(currentConnections).length;
io.on('connection', (socket) => {
  console.log('a user connected');
  currentConnections[socket.id] = { socket: socket };
  io.emit('countCurrentUser',  { count: numberOfConnections() });

  // socket.emit("countCurrentUser", count);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    delete currentConnections[socket.id];
    io.emit('countCurrentUser',  { count: numberOfConnections() });
  });
  
});



server.listen(port);
server.on('error', onError);

server.on('listening', () => onListening(server));




module.exports = app;
