DROP TABLE IF EXISTS users, page, page_meta, media, media_meta, component, component_meta, history;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE page (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author INTEGER REFERENCES users(id),
    languages VARCHAR(100)
);

CREATE TABLE page_meta (
    pmeta_id SERIAL PRIMARY KEY,
    page_id INTEGER REFERENCES page(id),
    key VARCHAR(255),
    value TEXT
);

CREATE TABLE media (
    media_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    url TEXT,
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author INTEGER REFERENCES users(id)
);

CREATE TABLE media_meta (
    mmeta_id SERIAL PRIMARY KEY,
    m_media_id INTEGER REFERENCES media(media_id),
    key VARCHAR(255),
    value TEXT
);

CREATE TABLE component (
    component_id SERIAL PRIMARY KEY,
    content TEXT,
    status VARCHAR(100),
    name VARCHAR(255),
    author INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE component_meta (
    cmeta_id SERIAL PRIMARY KEY,
    ccomponent_id INTEGER REFERENCES component(component_id),
    key VARCHAR(255),
    value TEXT
);

CREATE TABLE history (
    history_id SERIAL PRIMARY KEY,
    reference_id INTEGER,
    content TEXT,
    author INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
