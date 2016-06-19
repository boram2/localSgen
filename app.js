var app = require('express')();
var express        = require('express');
var http = require('http').Server(app);

var io = require('socket.io')(http);

var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var session        = require('express-session');    // 세션 인증을 위한 라이브러리
var sessionStore   = require('session-file-store')(session);
var passport = require('passport');
var flash = require('connect-flash');
app.use(flash());



app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/views'));     // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json
app.use(methodOverride());                  // simulate DELETE and PUT

app.use(session({
  secret: '1@Djsk2$0asdkfj$**si2md00DJWM1SO8$A',
  resave: false,
  saveUninitialized: true,
  store:new sessionStore()
}));

app.set('views', __dirname+'/views');
app.set('view engine', 'jade'); //view engine을 jade형식으로 사용한다.(jade는 npm에서 지원하는 것)
app.locals.pretty=true;
app.use(passport.initialize());
app.use(passport.session());

require('./router.js').router(app);

require('./db.js').connect();


http.listen(3000, function(){
    console.log('Conneted 3000 port!');
});
