const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require("body-parser");
const db = require("./dbuser");
const nodemailer = require("nodemailer");

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


app.post("/contactform", async(req, res) => {

    async function main(){

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let account = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ionos.de",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "no-reply@piluart.de", // generated ethereal user
                pass: "pLin5zGB!" // generated ethereal password
            }
        });
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"AquariumDesign" <bundaoliver@gmail.com>', // sender address
            to: "bundaoliver@gmail.com", // list of receivers
            subject: "Hello-Test", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        await transporter.sendMail(mailOptions);

        // console.log("Message sent: %s", info.messageId);
        // // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.json({succes: true});
    }

    main().catch(console.error);
});


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080, () => console.log("Its run"));
