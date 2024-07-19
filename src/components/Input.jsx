import React, { useState } from 'react';
import './Input.css'

function Input() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    inStock: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Product submitted:', product);

    setProduct({
      name: '',
      description: '',
      price: '',
      category: '',
      inStock: false
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
  <h2>Add New Product</h2>
  
  <div className="form-group">
    <label htmlFor="name">Product Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={product.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="description">Description:</label>
    <textarea
      id="description"
      name="description"
      value={product.description}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="price">Price:</label>
    <input
      type="number"
      id="price"
      name="price"
      value={product.price}
      onChange={handleChange}
      min="0"
      step="0.01"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="category">Category:</label>
    <input
      type="text"
      id="category"
      name="category"
      value={product.category}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="inStock">
      <input
        type="checkbox"
        id="inStock"
        name="inStock"
        checked={product.inStock}
        onChange={handleChange}
      />
      In Stock
    </label>
  </div>

  <button type="submit" className="submit-button">Add Product</button>
</form>
  );
}

export default Input;