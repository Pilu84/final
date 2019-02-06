const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require("body-parser");
const db = require("./dbuser");
const nodemailer = require("nodemailer");
const path = require("path");

app.use(bodyParser.json());
app.use(compression());


app.use(express.static(path.join(__dirname, 'client/build')));
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


app.post("/contactform", async(req, res) => {

    async function main(){

        let transporter = nodemailer.createTransport({
            host: "smtp.ionos.de",
            port: 587,
            secure: false,
            auth: {
                user: process.env.emailUser,
                pass: process.env.email_Pass
            }
        });
        let mailOptions = {
            from: '"AquariumDesign" <no-reply@piluart.de>',
            to: "bundaoliver@gmail.com, vinczehungary@gmail.com",
            subject: "Teszt uzenet az uj oldalrol",
            text: "Hello, ez egy uj uzenet az uj oldalrol! A felado: " + req.body.name + "; az email cime: " + req.body.email + "; az uzenete: " + req.body.message + ".",
            html: "<b>Hello, ez egy uj uzenet az uj oldalrol</b><p><h2>A felado:</h2></br> " + req.body.name + "</p><p><h2>Az email cime:</h2></br>" + req.body.email + "</p><p><h2>Az uzenet:</h2></br> " + req.body.message + "</p></br>"
        };


        await transporter.sendMail(mailOptions);

        res.json({succes: true});
    }

    main().catch(console.error);
});


// app.get('*', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

app.get('*', function(req, res) {
    res.sendFile(__dirname, 'client/build/index.html');
});


app.listen(process.env.PORT || 3001, () => console.log("Its run"));
