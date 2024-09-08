import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate(); 

  const products = [
    {
      id: "JVC200123",
      name: "Acme DISC",
      price: "1.00 $",
      detail: "Size: 700 MB",
      imageUrl: "https://m.media-amazon.com/images/I/61JZaX4bR3L._SX679_.jpg",
    },
    {
      id: "GGWP0007",
      name: "God of War",
      price: "20.00 $",
      detail: "Weight: 2KG",
      imageUrl: "https://m.media-amazon.com/images/I/81BKSUoSA-L._SX522_.jpg",
    },
    {
      id: "TR120555",
      name: "Chair",
      price: "40.00 $",
      detail: "Dimension: 24x45x15",
      imageUrl: "https://m.media-amazon.com/images/I/71RmsdSMuUL._AC_SY450_.jpg",
    },
  ];


  const handleCheckboxChange = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((productId) => productId !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const isEditMode = selectedProducts.length > 0;

  
  const handleAddProduct = () => {
    navigate('/new-product'); 
  };

  
  const handleEditProduct = () => {
    navigate('/edit-product'); 
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <div>
         
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={isEditMode ? handleEditProduct : handleAddProduct}
          >
            {isEditMode ? 'EDIT' : 'ADD'}
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">MASS DELETE</button>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg relative">
            <input
              type="checkbox"
              className="absolute top-2 left-2"
              onChange={() => handleCheckboxChange(product.id)}
              checked={selectedProducts.includes(product.id)}
            />
            <div className="mt-6">
             
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-40 object-cover mb-4"
              />
              <p className="font-bold">{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <p className="text-center text-gray-600 mt-6">
        End of product list. Please check back for updates.
      </p>
    </div>
  );
};

export default ProductList;
