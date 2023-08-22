import React, { useContext } from 'react'
import "./NavBar.css"
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { FaHeart,  FaHome,  FaShoppingCart, FaUser } from 'react-icons/fa'

const NavBar = () => {
  const {loggedInUser}=useContext(AuthContext)
  return (
    <div className='main-div'>
        <div>
          <Link to="/" className='home'><FaHome/></Link>
          
        </div>
        <div className='logo-text'>
        
        <Link to="/" className='logo-text-link'>MOBEL</Link>

        </div>
        <div className='nav-links'>
            
            <Link className='nav-links-link' to="/wishlist"><FaHeart color='black'/></Link>
              <Link className='nav-links-link'to="/cart"><FaShoppingCart color='black'/>
              </Link>
              {loggedInUser===null?
              <Link className='nav-links-link' to="/login">
              <FaUser color='black'/>
              </Link>: <Link className='nav-links-link' to='/profile'>
              <FaUser color="black"/>
              </Link>
            }


        </div>
    </div>
  )
}

export default NavBar