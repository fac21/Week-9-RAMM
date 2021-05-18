BEGIN;

DROP TABLE IF EXISTS users, sessions, categories, products CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE sessions (
   sid TEXT PRIMARY KEY,
   data JSON NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name text 
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name text ,
    product_description text,
    price Integer,
    img_path text,
    category_id Integer REFERENCES categories(id),
    product_custom JSON,
    created_at timestamp
);


INSERT INTO users (email, password, name) VALUES
(
  'test@gmail.com',
  '$2a$10$vzgLAxSa1k293giKSbVWi.GgSGmb1JB/kD1qWIg.mrUlt7UwVDCWG',
  'Test Testington'
);

INSERT INTO sessions (sid, data) VALUES
(
  'abc123',
  '{"test":"stuff", "basket":""}'
);


INSERT INTO categories (category_name) VALUES
('mug'),
('plate'),
('jug');

INSERT INTO products ( product_name , product_description,price,img_path, category_id, product_custom, created_at) VALUES
  ('Mug one',  'A very Nice mug one', 10, 'https://cdn.shopify.com/s/files/1/1987/6031/products/1pod020001_0_Gray_adbf1867-8389-4f25-89f8-f369fe9f105e.jpg?v=1587728499' ,1,'{"colour":["red", "blue" ,"yellow"], "quantity": 10 }',(SELECT CURRENT_TIMESTAMP)),
  ('Mug two',  'A very Nice mug two', 10, '/images/products/mug_2.jpeg',1,'{"colour":["red", "black", "green"], "quantity": 10 }',(SELECT CURRENT_TIMESTAMP)),
  ('Mug three',  'A very Nice mug three', 10, 'https://cdn.shopify.com/s/files/1/1987/6031/products/1pod020001_0_Gray_adbf1867-8389-4f25-89f8-f369fe9f105e.jpg?v=1587728499' ,1,'{"colour":["purple", "blue" ,"pink"], "quantity": 10 }',(SELECT CURRENT_TIMESTAMP)),
  ('Jug one',  'A very Nice jug', 10, '/images/products/jug_1.jpeg' ,3,'{"colour":["purple", "blue" ,"pink"], "quantity": 10 }',(SELECT CURRENT_TIMESTAMP)),
  ('Plate one',  'A very Plate jug', 10, '/images/products/plate_1.jpeg' ,2,'{"colour":["purple", "blue" ,"pink"], "quantity": 10 }',(SELECT CURRENT_TIMESTAMP));

COMMIT;
