import React from "react";

// list the categories here
// so we can map over to save typing 8 radios
const categories = function getAllProducts() {
    const SELECT_PRODUCTS = `
        SELECT category_name FROM categories
      `;
    return db.query(SELECT_PRODUCTS).then((result) => result.rows);
  }

function CategoryFilter({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map(cat => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name="categories"
            id={cat}
            value={cat}
            checked={cat === category}
            onChange={e => setCategory(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
