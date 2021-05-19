import db from "./connection.js";

export function getAllProducts() {
  const SELECT_PRODUCTS = `
      SELECT * FROM products
    `;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
}

 


