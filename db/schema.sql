BEGIN;

DROP TABLE IF EXISTS canvas;
DROP TABLE IF EXISTS users;

CREATE TABLE canvas (
  id            SERIAL PRIMARY KEY,
  title         VARCHAR NOT NULL,
  description   TEXT,
  drawing       INTEGER ARRAY
);

CREATE TABLE users (
  id            SERIAL PRIMARY KEY,
  username      VARCHAR NOT NULL,
  password      VARCHAR(64) NOT NULL,
  email         VARCHAR
);

INSERT INTO
  canvas(title)
VALUES
  ('Test Title');

INSERT INTO
  users(username,password,email)
VALUES
  ('Jason', 'Seminara', 'hotshot@developers.com');

COMMIT;
