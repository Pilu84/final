const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require("body-parser");
const db = require("./dbuser");

app.use(bodyParser.json());
app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.get("/getpages", async (req, res) => {
    const results = await db.getContent(req.query.page);
    res.json(results.rows);
});

app.get("/getgallery", async (req, res) => {
    const results = await db.getPictureFromMeta(req.query.galleryid);

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

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
