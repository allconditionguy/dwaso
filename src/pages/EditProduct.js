import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    detail: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (location.state) {
      setProduct(location.state.product);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    // Logic to update the product here

    navigate('/');  // Redirect back to ProductList
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Detail</label>
          <input
            type="text"
            name="detail"
            value={product.detail}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
