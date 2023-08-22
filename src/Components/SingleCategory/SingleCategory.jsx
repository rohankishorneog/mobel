 import React, { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 

import './SingleCategory.css';



const SingleCategory = () => {
  const { categoryName } = useParams();
  const { product } = useContext(ProductContext);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]); 
  const [filtered, setFiltered] = useState(false);
  const [display,setDisplay]=useState(false)

  useEffect(() => {
    const getProductsByCategory = (category) => {
      const filteredProducts = product.filter(item => item.categoryName === category);
      
      let sortedProducts = [...filteredProducts];
      if (sortBy === 'lowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'highToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
     
      let filteredByPrice = sortedProducts;
      if (filtered) {
        filteredByPrice = sortedProducts.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);
      }
      
      setProductsByCategory(filteredByPrice);
    };

    getProductsByCategory(categoryName);
  }, [categoryName, product, sortBy, priceRange, filtered]);

  const handleApplyFilters = () => {
    setFiltered(true);
    setDisplay(curr=>!curr)
  };

  const handleRemoveFilters = () => {
    setFiltered(false);
    setPriceRange([0, 100000]);
    setSortBy('');

    setDisplay(curr=>!curr)
  };
  const handleDisplay=()=>{
    setDisplay(curr=>!curr)
  }

  return (
    <div className='singleCategory-main-div'>
      
      <div className='sorting-div'>
        <div className='sorting-bar'>
        <button onClick={handleDisplay}>{display?"x":<FaFilter size={20}/>}</button>
        </div>
     <div className='single-category-contents'>
     <h3>{categoryName.toUpperCase()}</h3>
        <p>
            A collection of masterfully crafted {categoryName} for every nook of your home.
        </p>
      
      {display &&<div className='sorting-background-div'>
      <div className="sorting-options">
        <label>Sort By:</label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <label>Price Range:</label>
        <Slider
          min={0}
          max={100000}
          value={priceRange}
          onChange={newRange => setPriceRange(newRange)}
          range
        />
        <p>Min: ${priceRange[0]} - Max: ${priceRange[1]}</p>
        <button onClick={handleApplyFilters}>Apply</button>
        <button onClick={handleRemoveFilters}>Remove Filters</button>
      </div>

      </div>}
     

      </div>
   
      <div className="single-category-all-products-div">
      {productsByCategory.map(item => (
        
            <div className="single-category-single-product-div" key={item._id}>
          
          <Link to={`/products/${item._id}`}>
            <img src={item.imageUrl} alt={item.title} />
          </Link>
          <span className='product-title'>{item.title.toUpperCase()}</span>
          <span className='price'>Rs{item.price}</span>
         
        </div>
       
      
      ))}
      
     </div>
       
       </div>
    </div>
  );
}

export default SingleCategory;
