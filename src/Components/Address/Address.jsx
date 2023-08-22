import React, { useContext, useState} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Address.css'
import { AddressContext } from '../../contexts/AddressContext';

const Address = () => {
  const { loggedInUser } = useContext(AuthContext);
  const {addAddress,selectAddress,selectedAddress}=useContext(AddressContext)
  const [showForm, setShowForm]=useState(false)


  const handleSelectAddress = (address) => {
    selectAddress(address);
  };

  const handleAddAddress = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      country,
      state,
      district,
      pinCode,
      areaName,
      houseNo,
      phone,
      email,
    } = event.target.elements;

    const newAddress = {
      firstName: firstName.value,
      lastName: lastName.value,
      country: country.value,
      state: state.value,
      district: district.value,
      pinCode: pinCode.value,
      areaName: areaName.value,
      houseNo: houseNo.value,
      phone: phone.value,
      email: email.value,
    };

    addAddress(newAddress)

    selectAddress(newAddress);
  };

  const handleShowForm=()=>{
    setShowForm(curr=>!curr)
  }

  return (
    <div>
      {loggedInUser.address.length === 0 && (
        <div className='address-form-div'> 
          <p>No addresses found.</p>
        
        </div>
      )}

      {loggedInUser.address.length > 0 && (
        <div>
          {selectedAddress ? (
            <div>
              <h2>Your Address:</h2>
              <p>First Name: {selectedAddress.firstName}</p>
              <p>Last Name: {selectedAddress.lastName}</p>
              <p>Country: {selectedAddress.country}</p>
              <p>State: {selectedAddress.state}</p>
              <p>District: {selectedAddress.district}</p>
              <p>Pin Code: {selectedAddress.pinCode}</p>
              <p>Area Name: {selectedAddress.areaName}</p>
              <p>House No: {selectedAddress.houseNo}</p>
              <p>Phone: {selectedAddress.phone}</p>
              <p>Email: {selectedAddress.email}</p>
            </div>
          ) : (
            <div>
              <p>Choose an address:</p>
              <ul>
                {loggedInUser.address.map((address, index) => (
                  <li key={index} onClick={() => handleSelectAddress(address)}>
                    {address.areaName}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={() => selectAddress('')}>Back to List</button>
        </div>
      )}
      <button onClick={handleShowForm} > Add New Address</button>
      {showForm && <form onSubmit={handleAddAddress} className='address-form'>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              required
            />

            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter country"
              required
            />

            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter state"
              required
            />

            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              placeholder="Enter district"
              required
            />

            <label htmlFor="pinCode">Pin Code:</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              placeholder="Enter pin code"
              required
            />

            <label htmlFor="areaName">Area Name:</label>
            <input
              type="text"
              id="areaName"
              name="areaName"
              placeholder="Enter area name"
              required
            />

            <label htmlFor="houseNo">House No:</label>
            <input
              type="text"
              id="houseNo"
              name="houseNo"
              placeholder="Enter house number"
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              required
            />

            <button type="submit">Add Address</button>
          </form>}
        
    </div>
  );
};

export default Address;
