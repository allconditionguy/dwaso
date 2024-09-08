import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const navigate = useNavigate();

  const handleEditProduct = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Product</h1>
      
      <button onClick={handleEditProduct} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default EditProduct;
