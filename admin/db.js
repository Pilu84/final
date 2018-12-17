const spicedPg = require('spiced-pg');
const {dbuser, dbpass} = require("./secrets.json");

const db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/aquariumdesign`);

exports.loginUser = email => {
    return db.query(
        `SELECT * FROM users WHERE email = $1`,

        [email]
    );
};
