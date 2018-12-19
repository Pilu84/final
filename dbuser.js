const spicedPg = require('spiced-pg');
const {dbuser, dbpass} = require("./secrets.json");

const db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/aquariumdesign`);


exports.getContent = id => {

    return db.query(`SELECT * FROM page WHERE title = $1`, [id]);

};
