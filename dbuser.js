const spicedPg = require('spiced-pg');
const {dbuser, dbpass} = require("./secrets.json");

const db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/aquariumdesign`);


exports.getContent = id => {

    return db.query(`SELECT * FROM page WHERE title = $1`, [id]);

};

exports.getPictureFromMeta = id => {
    return db.query(`SELECT * FROM component_meta WHERE ccomponent_id = $1`,

        [id]);
};

exports.getPicturesToGallery = (ids) => {
    return db.query(`SELECT * FROM media WHERE media_id = ANY($1)`,

        [ids]);
};

exports.getNaviName = () => {
    return db.query(`SELECT * FROM component_meta WHERE ccomponent_id = 1 AND key = 'nav_name'`);
};
