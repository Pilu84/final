const spicedPg = require('spiced-pg');
const {dbuser, dbpass} = require("./secrets.json");

const db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/aquariumdesign`);

exports.loginUser = email => {
    return db.query(
        `SELECT * FROM users WHERE email = $1`,

        [email]
    );
};

exports.getPages = () => {
    return db.query(`SELECT * FROM page`);
};


exports.getContent = id => {

    return db.query(`SELECT * FROM page WHERE id = $1`, [id]);

};


exports.updateContent = (pageid, content) => {
    db.query(`UPDATE page SET content = $2 WHERE id = $1`,

        [pageid, content]);

    return db.query(`SELECT * FROM page WHERE id = $1`, [pageid]);
};

exports.updatePageName = (pageid, name) => {
    db.query(`UPDATE page SET title = $2 WHERE id = $1`,

        [pageid, name]);

    return db.query(`SELECT * FROM page WHERE id = $1`, [pageid]);
};


exports.createNewPage = (title, userid, basiccontent) => {
    return db.query(`INSERT INTO page (title, content, status, author, languages) VALUES($1, $3, 'active', $2, 'eng')
                    RETURNING id`,

    [title, userid, basiccontent]);
};

exports.uploadPicture = (file, id, title) => {
    return db.query(`INSERT INTO media (title, url, status, author) VALUES ($3, $1, 'active', $2)
                    RETURNING *`,

    [file, id, title]);
};

exports.getPictureUrl = () => {
    return db.query(`SELECT * FROM media`);
};

exports.getgallery = () => {
    return db.query(`SELECT * FROM component WHERE name = 'gallery'`);
};

exports.getSinglegallery = (id) => {
    return db.query(`SELECT * FROM component_meta WHERE ccomponent_id = $1`,
        [id]);
};


exports.getPicturesToGallery = (ids) => {
    return db.query(`SELECT * FROM media WHERE media_id = ANY($1)`,

        [ids]);
};

exports.updateGallery = (pictures, galleryid) => {
    return db.query(`UPDATE component_meta SET value = $1 WHERE ccomponent_id = $2 AND key = 'picture'`,

        [pictures, galleryid]);
};

exports.updateNavname = (id, arrayNav) => {
    return db.query(`UPDATE component_meta SET value = $2 WHERE cmeta_id = $1 AND key = 'nav_name'
                    RETURNING *`,

    [id, arrayNav]);
};


exports.getNaviName = () => {
    return db.query(`SELECT * FROM component_meta WHERE ccomponent_id = 1 AND key = 'nav_name'`);
};
