import React, { useContext } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'

const Landing = () => {
    const {categories}=useContext(ProductContext)
        console.log(categories)

  return (
    <div className='landing-main-div'>
        <section className='landing-welcome-section'> 
                <img className="new-collection-img"src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="new collection" />
                <div className='new-collection-texts'>
                    <h3>Exquisite Collections</h3>
                    <p className='collection-text'> Find the most aesthetic furniture here</p>
                    <Link to="/products"><button className='button'>
                        Shop the Collection</button></Link>
                    
                </div>

        </section>

        <section className='categories'>
            {
                categories.map(category => 
                    <div className='landing-categories-div' key={category._id}>
                        {console.log(category)}
                        <Link to={`/categories/${category.categoryName}`}>
                            <img src={category.imageUrl} alt={category.categoryName} />
                        
                        </Link>
                    </div>
                    )
            }
                

        </section>

    </div>
  )
}

export default Landing