BEGIN;

DROP TABLE IF EXISTS currentmovies;

CREATE TABLE currentmovies(
  id SERIAL PRIMARY KEY,
  Title VARCHAR NOT NULL,
  Poster TEXT,
  Rating VARCHAR NOT NULL,
  Runtime VARCHAR NOT NULL
  );




COMMIT;
