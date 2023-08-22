import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { AddressContext } from '../../contexts/AddressContext';

const Profile = () => {
  const {loggedInUser}=useContext(AuthContext)
  const { address } = useContext(AddressContext);
  const navigate=useNavigate()
  const handleAddAddress=()=>{
    navigate('/address')
  }

  return (
    <div>
      <div>
        {/* Display user's first name */}
        <p>First Name: {loggedInUser.firstName}</p>
        {/* Display user's last name */}
        <p>Last Name: {loggedInUser.lastName}</p>
        {/* Display user's email */}
        <p>Email: {loggedInUser.email}</p>
      </div>

      <div>
        <h2>Addresses:</h2>
        {/* Check if the user has any addresses */}
        {address.length > 0 ? (
          <ul>
            {/* Loop through user's addresses and display each address */}
            {address.map((address, index) => (
              <li key={index}>
                {/* Display the address details */}
                <p>First Name: {address.firstName}</p>
                <p>Last Name: {address.lastName}</p>
                <p>Country: {address.country}</p>
                <p>State: {address.state}</p>
                <p>District: {address.district}</p>
                <p>Pin Code: {address.pinCode}</p>
                <p>Area Name: {address.areaName}</p>
                <p>House No: {address.houseNo}</p>
                <p>Phone: {address.phone}</p>
                <p>Email: {address.email}</p>
              </li>
            ))}
            <button onClick={handleAddAddress}>add</button>
          </ul>
        ) : (
            <>
          <p>No addresses found.</p>
          <button onClick={handleAddAddress}>add</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
