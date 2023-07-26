import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import  WishListButton  from "../Buttons/WishlistButton/WishListButton";
import { Cartbutton } from "../Buttons/CartButton/CartButton";

const AllProducts = () => {
  const { product, isLoading, error } = useContext(ProductContext);

  const initialFilterState = null; // Set the initial filter state to null

  const [filter, setFilter] = useState(initialFilterState);
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleToggleSortingOptions = () => {
    setShowSortingOptions((prevState) => !prevState);
  };

  const handleClearFilters = () => {
    setFilter(initialFilterState);
    setShowSortingOptions(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredProducts = product.filter((item) => {
    if (!filter) {
      return true; // Show all products when no filter is selected
    }
    const price = parseFloat(item.price);
    const categoryMatch =
      !filter.category || filter.category === "all" || filter.category === item.category;
    const priceMatch =
      price >= parseFloat(filter.lowPrice) && price <= parseFloat(filter.highPrice);
    const ratingMatch = parseFloat(item.rating) >= parseFloat(filter.rating);
    return categoryMatch && priceMatch && ratingMatch;
  });

  return (
    <div>
      <h2>All Products</h2>
      <button onClick={handleToggleSortingOptions}>
        {showSortingOptions ? "Hide Sorting Options" : "Show Sorting Options"}
      </button>
      {showSortingOptions && (
        <div>
          <label>
            Low Price:
            <input
              type="number"
              name="lowPrice"
              value={filter ? filter.lowPrice : ""}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            High Price:
            <input
              type="number"
              name="highPrice"
              value={filter ? filter.highPrice : ""}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            Category:
            <select
              name="category"
              value={filter ? filter.category : ""}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="chair">Chair</option>
              <option value="sofa">Sofa</option>
              <option value="lamp">Lamp</option>
            </select>
          </label>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={filter ? filter.rating : ""}
              onChange={handleFilterChange}
            />
          </label>
          <button onClick={handleClearFilters}>Clear Filters</button>
        </div>
      )}
      <ul>
        {filteredProducts.map((item) => (
            <Link to={`/products/${item._id}`}>
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            {/* Add other product details you want to display */}
            <WishListButton/>
            <Cartbutton/>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
