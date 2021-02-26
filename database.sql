CREATE TABLE "articles" (
  "id" int PRIMARY KEY,
  "title" text,
  "description" text,
  "article_body" text,
  "category_id" int,
  "highlight" int,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "articles_categories" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "group_id" int
);

CREATE TABLE "articles_group" (
  "id" SERIAL PRIMARY KEY,
  "name" text
);

ALTER TABLE "articles" ADD FOREIGN KEY ("category_id") REFERENCES "articles_categories" ("id");
ALTER TABLE "articles_categories" ADD FOREIGN KEY ("group_id") REFERENCES "articles_group" ("id");