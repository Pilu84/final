const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const db = require("./db");
const csurf = require("csurf");
const bcrypt = require("./cript");
const s3 = require("./s3");


var multer = require("multer");
var uidSafe = require("uid-safe");
var path = require("path");

var diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});


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


app.get("/getallpages", async (req, res) => {
    const results = await db.getPages();

    res.json(results.rows);
});

app.get('/login', function(req, res) {
    if (req.session.id) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.get("/getmedia", async (req, res) => {
    const results = await db.getPictureUrl();

    res.json(results.rows);
});

app.get("/getgallery", async (req, res) => {
    const results = await db.getgallery();

    res.json(results.rows);
});

app.get("/getsinglegallery", async (req, res) => {
    const results = await db.getSinglegallery(req.query.gallery);

    var picArr = await getPicArr(results.rows);
    async function getPicArr(result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].key == "picture") {

                return JSON.parse(result[i].value);
            }
        }
    }

    const pictures = await db.getPicturesToGallery(picArr);

    res.json(pictures.rows);
});


app.post("/updateGallery", async (req, res) => {
    console.log(req.body.pictures);

    const results = await db.updateGallery(req.body.pictures, req.body.galleryid);

    res.json({succes: true, result: results.rows});
});

app.post("/updatenav", async (req, res) => {

    const results = await db.updateNavname(3, req.body.navname);
    res.json({succes: true, navname: results.rows});
});


app.get("/getnaviname", async (req, res) => {
    const results = await db.getNaviName();

    var navArr = await setNaviName(results.rows);

    async function setNaviName(result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].key == "nav_name") {

                return JSON.parse(result[i].value);
            }
        }
    }


    res.json(navArr);
});

app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
    if(req.file) {

        const s3 = require("./config.json");
        var fileurl = s3.s3Url + req.file.filename;

        db.uploadPicture(fileurl, req.session.id, req.file.originalname).then(results => {
            if (results.rows) {
                res.json({succes: true,
                    picture: results.rows[0]});
            }
        }).catch(err => {
            res.json({succes: false});
            console.log("error by writing database: ", err);
        });
    }
});

app.post("/createnewpage", async (req, res) => {
    let basicContent = `<div class="row fluid"><div class="col-sm-4 p-5"></div><div class="col-sm-8 p-5"></div>`;
    const results = await db.createNewPage(req.body.title, req.session.id, basicContent);

    res.json(results.rows);
});

app.get("/getpages", async (req, res) => {

    const results = await db.getContent(req.query.page);
    res.json(results.rows);
});

app.post("/setsinglepage/:id", async (req, res) => {

    const results = await db.updateContent(req.params.id, req.body.maincontent);

    res.json(results.rows);
});

app.post("/setsinglepagename/:id", async (req, res) => {


    const results = await db.updatePageName(req.params.id, req.body.homepagename);

    res.json(results.rows);
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
