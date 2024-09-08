import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {

    navigate('/');
  };

  return (
    <div>
      <h1>Add Product</h1>
      <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Product
      </button>
    </div>
  );
};

export default AddProduct;
