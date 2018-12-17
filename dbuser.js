const spicedPg = require('spiced-pg');
const {dbuser, dbpass} = require("./secrets.json");

const db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/aquariumdesign`);


exports.getContent = id => {

    return db.query(`SELECT * FROM page WHERE id = $1`, [id]);

};
