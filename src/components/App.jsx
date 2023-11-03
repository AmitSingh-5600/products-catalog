import React, { useState } from "react";
import ProductList from "./ProductList";
import productsData from "../data";

function App() {
  var [filteredProducts, setFilterProducts] = useState(productsData);
  function handleFilterChange(f) {
    if (f.target.value === "all") {
      setFilterProducts(productsData);
    } else {
      var newProductData = productsData.filter((n) => {
        return n.category === f.target.value;
      });
      setFilterProducts(newProductData);
    }
  }

  return (
    <div>
      <div style={{backgroundColor: "#3498db"}}>
      <h1 className="catalog-title">Product Catalog</h1>
      </div>

      <div className="filter-bar">
        <label htmlFor="categoryFilter" className="filter-label">Filter by Category: </label>
        <select id="categoryFilter" className="filter-select" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home and kitchen appliances">
            Home and Kitchen Appliances
          </option>
          <option value="health and beauty">Health and Beauty</option>
          <option value="furniture and home decor">
            Furniture and Home Decor
          </option>
          <option value="automotive and tools">Automotive and Tools</option>
          <option value="books and media">Books and Media</option>
          <option value="toys and games">Toys and Games</option>
          <option value="sports and outdoors">Sports and Outdoors</option>
          <option value="jewelry and accessories">
            Jewelry and Accessories
          </option>
          <option value="gardening and outdoor living">
            Gardening and Outdoor Living
          </option>
          <option value="pet supplies">Pet Supplies</option>
        </select>
      </div>
      <ProductList productsData={filteredProducts} />
    </div>
  );
}
export default App;
