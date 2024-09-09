import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate(); 

  const [products , setProducts ] = useState([
    {
      id: "JVC200123",
      name: "Acme DISC",
      price: "1.00 $",
      detail: "Size: 700 MB",
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiponcomp.com%2Fshop%2Fproduct%2Facme-cd-rw-12x-10pcs-cylindrical%2F686622&psig=AOvVaw0NnZb3Dtn59fL_1EiHeE7y&ust=1725720330752000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjuyK_HrogDFQAAAAAdAAAAABAE",
    },
    {
      id: "GGWP0007",
      name: "God of War",
      price: "20.00 $",
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSony-Ragnarok-Standard-Game-PlayStation%2Fdp%2FB0B6FGSKCQ&psig=AOvVaw0tZxPNPyG97NN5WPT1_OlV&ust=1725720279264000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODc4JXHrogDFQAAAAAdAAAAABAE",
      detail: "Weight: 2KG",
    },
    {
      id: "TR120555",
      name: "Chair",
      price: "40.00 $",
      detail: "Dimension: 24x45x15",
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.com.gh%2Fproduct%2F5B8TYCVIE-ktaxon-modern-single-sofa-chair-club-chairs-with-side-bags-fabric-arm-chair-with-wood-legs-for-living-room-bed-room-dark-grey&psig=AOvVaw0NvGD2Bw11cYWAIXrdNdlx&ust=1725720170077000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLC5luDGrogDFQAAAAAdAAAAABAE",
    },
  ]);

  const handleCheckboxChange = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((productId) => productId !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const handleMassDelete = () => {
    const filteredProducts = products.filter(
      (product) => !selectedProducts.includes(product.id)
    );
    setProducts(filteredProducts); 
    setSelectedProducts([]); 
  };

  const isEditMode = selectedProducts.length > 0;

  
  const handleAddProduct = () => {
    navigate("/new-product"); 
  };

  const handleEditProduct = () => {
    if (isEditMode) {
      navigate("/edit-product");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Product List</h1>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={isEditMode ? handleEditProduct : handleAddProduct}
          >
            {isEditMode ? "EDIT" : "ADD"}
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded"  onClick={handleMassDelete} >
            MASS DELETE
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) =>
          Array(4) 
            .fill(0)
            .map((_, index) => (
              <div
                key={`${product.id}-${index}`}
                className="border p-4 rounded-lg relative"
              >
                <input
                  type="checkbox"
                  className="absolute top-2 left-2"
                  onChange={() => handleCheckboxChange(`${product.id}-${index}`)}
                  checked={selectedProducts.includes(`${product.id}-${index}`)}
                />
                <div className="mt-6">
                  <p className="font-bold">{product.id}</p>
                  <a
                    href={product.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {product.name}
                  </a>
                  <p>{product.price}</p>
                  <p>{product.detail}</p>
                </div>
              </div>
            ))
        )}
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <p className="text-center text-gray-600 mt-6">
        End of product list. Please check back for updates.
      </p>
    </div>
  );
};

export default ProductList;
