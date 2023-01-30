import axios from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../http/client";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

useEffect(() => {
    axios.get(endpoints.SHOW).then((response) => {
      console.log("lista", response.data.products);
      const products = response.data.products;
      setProducts(products);
    });
  }, []);

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="product-container">
      <div className="filter-container">
        <label htmlFor="category">Filter by category: </label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {products
        .filter((product) =>
          selectedCategory ? product.category === selectedCategory : true
        )
        .map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount Percentage: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <img
              src={product.thumbnail}
              alt="product thumbnail"
              style={{ maxWidth: "200px" }}
            />
            <div className="images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  style={{ maxWidth: "50px" }}
                  alt={product.title}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}