import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  // Initialize state for form fields
  const [productData, setProductData] = useState({
    type: '',
    name: '',
    info: '',
    price: 0,
    isAvailable: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Use type to differentiate between text input and checkbox
    const newValue = type === 'checkbox' ? checked : value;
    setProductData({
      ...productData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request with productData to your server
      const response = await axios.post('/api/products', productData);

      if (response.status === 201) {
        console.log('Product created successfully:', response.data);
        // Optionally, clear the form or show a success message
      } else {
        console.error('Error creating product:', response.data);
      }
    } catch (error) {
      console.error('There was an error sending the request:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={productData.type}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Info:
          <textarea
            name="info"
            value={productData.info}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Available:
          <input
            type="checkbox"
            name="isAvailable"
            checked={productData.isAvailable}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
