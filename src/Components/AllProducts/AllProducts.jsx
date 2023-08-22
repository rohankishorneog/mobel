import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import WishListButton from "../Buttons/WishlistButton/WishListButton";
import { FaFilter } from "react-icons/fa";
import { Cartbutton } from "../Buttons/CartButton/CartButton";
import "./AllProducts.css"

const AllProducts = () => {
  const { product, isLoading, error } = useContext(ProductContext);
  const [display, setDisplay]=useState(false)


  const [filter, setFilter] = useState({
    lowPrice: 0,
    highPrice: 100000,
    categoryName: "all",
    sortBy: "",
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleFilterChange = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilter({
      lowPrice: 0,
      highPrice: 100000,
      categoryName: "all",
      sortBy: "",
    });
  };

  let filteredProducts = [...product];

  if (filter.categoryName !== "all") {
    filteredProducts = filteredProducts.filter(
      (item) => item.categoryName === filter.categoryName
    );
  }

  filteredProducts = filteredProducts.filter(
    (item) =>
      item.price >= filter.lowPrice && item.price <= filter.highPrice
  );

  if (filter.sortBy === "priceLowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filter.sortBy === "priceHighToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (filter.sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }


  const handleDisplay=() => {
    setDisplay(curr=>!curr)
  }

  return (
    <div>
        <div className='sorting-bar'>
        <button onClick={handleDisplay}>{display?"x":<FaFilter size={20}/>}</button>
        </div>
      { display && <div>
    
      <div>
        <label>
          Price Range:
          <Slider
            min={0}
            max={100000}
            value={[filter.lowPrice, filter.highPrice]}
            onChange={(newRange) => {
              handleFilterChange("lowPrice", newRange[0]);
              handleFilterChange("highPrice", newRange[1]);
            }}
            range
          />
          Min: Rs{filter.lowPrice} - Max: Rs{filter.highPrice}
        </label>
        <label>
          Category:
          <select
            name="categoryName"
            value={filter.categoryName}
            onChange={(e) => handleFilterChange("categoryName", e.target.value)}
          >
            <option value="all">All</option>
            <option value="chairs">Chairs</option>
            <option value="sofas">Sofas</option>
            <option value="lamps">Lamps</option>
          </select>
        </label>
        <label>
          Sort By:
          <select
            name="sortBy"
            value={filter.sortBy}
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          >
            <option value="">None</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <button onClick={handleClearFilters}>Clear Filters</button>
      </div>

      </div>}
      
      <ul className="all-products-list">
        {filteredProducts.map((item) => (
          
            <li className="all-product-item">
              <Link to={`/products/${item._id}`} key={item._id}>
              <img src={item.imageUrl} alt={item.title} />
              </Link>
              <p>{item.title}</p>
              <p>Rs{item.price}</p>
              <div className="all-product-button">
              <WishListButton  newProduct={item}/>
              <Cartbutton  newProduct={item} />
              </div>
              
            </li>
      
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
