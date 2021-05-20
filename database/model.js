import db from "./connection.js";

export function getAllProducts() {
  const SELECT_PRODUCTS = `
      SELECT * FROM products
    `;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
}

export function getProductData(id) {
  const SELECT_PRODUCT = `
  SELECT * FROM products WHERE id=$1`;
  return db.query(SELECT_PRODUCT, [id]).then((result) => result.rows[0]);
}


