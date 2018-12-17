const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const db = require("./db");
const csurf = require("csurf");
const bcrypt = require("./cript");

app.use(compression());


app.use(bodyParser.json());



app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});


if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8083/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.post("/adminlogin", (req, res) => {
    db.loginUser(req.body.email).then(results => {
        bcrypt.compare(req.body.password, results.rows[0].password).then(login => {

            if (login === true) {
                req.session.id = results.rows[0].id;
                res.json({succes: true});
            } else {
                res.json({succes: false});
            }
        });
    }).catch(err => {
        console.log(err);
        res.json({succes: false});
    });
});

app.get("/logout", (req, res) => {

    req.session = null;
    res.redirect("/login");
});


app.get('/login', function(req, res) {
    if (req.session.id) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.get('*', function(req, res) {
    if (!req.session.id) {
        res.redirect('/login');
    } else {
        res.sendFile(__dirname + '/index.html');

    }
});
app.listen(8082, function() {
    console.log("I'm listening.");
});
