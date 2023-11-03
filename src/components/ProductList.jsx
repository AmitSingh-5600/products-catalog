import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function ProductList(props) {
  const [sortedProducts, setSortedProducts] = useState(props.productsData);

  useEffect(() => {
    setSortedProducts(props.productsData);
  }, [props.productsData]);

  function handleSortChange(e) {
    const sortBy = e.target.value;
    let sorted = [...sortedProducts];

    if (sortBy === "price-asc") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }

    setSortedProducts([...sorted]); // Update the state after sorting
  }

  return (
    <div>
      <label htmlFor="sortProducts" className="sort-label">Sort by Price: </label>
      <select
        className="sort-select"
        id="sortProducts"
        onChange={handleSortChange}
      >
        <option value="">Default</option>
        <option value="price-asc">Price - Low to High</option>
        <option value="price-desc">Price - High to Low</option>
      </select>

      <div className="products-container">
        {sortedProducts.map((x) => (
          <Card
            key={x.id} // Ensure each item has a unique key prop
            id={x.id}
            img={x.img}
            title={x.title}
            description={x.description}
            price={x.price}
            category={x.category}
          />
        ))}
      </div>
    </div>
  );
}
