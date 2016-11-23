BEGIN;

DROP TABLE IF EXISTS canvas;
DROP TABLE IF EXISTS user;

CREATE TABLE canvas (
  id            SERIAL PRIMARY KEY,
  title         VARCHAR NOT NULL,
  description   TEXT,
  drawing       INTEGER ARRAY
);

CREATE TABLE user (
  id            SERIAL PRIMARY KEY,
  username      VARCHAR NOT NULL,
  password      VARCHAR(64) NOT NULL,
  email         VARCHAR
);

COMMIT;
