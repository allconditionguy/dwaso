import React, { useState } from 'react';

const ProductForm = ({ type }) => {
  const [productType, setProductType] = useState('DVD');
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');

  const handleTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const renderSpecialAttributes = () => {
    if (productType === 'DVD') {
      return (
        <div>
          <label>Size (MB)</label>
          <input
            id="size"
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border p-2"
          />
          <p>Product description</p>
        </div>
      );
    } else if (productType === 'Furniture') {
      return (
        <div>
          <label>Height (CM)</label>
          <input
            id="height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border p-2"
          />
          <label>Width (CM)</label>
          <input
            id="width"
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="border p-2"
          />
          <label>Length (CM)</label>
          <input
            id="length"
            type="text"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="border p-2"
          />
          <p>Please provide dimensions in HxWxL format.</p>
        </div>
      );
    } else if (productType === 'Book') {
      return (
        <div>
          <label>Weight (KG)</label>
          <input
            id="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border p-2"
          />
          <p>Product description</p>
        </div>
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{type} Product</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label>SKU</label>
          <input
            id="sku"
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label>Price ($)</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2"
          />
        </div>

        <div>
          <label>Type Switcher</label>
          <select
            id="productType"
            value={productType}
            onChange={handleTypeChange}
            className="border p-2"
          >
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>

        {renderSpecialAttributes()}

        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
          <button type="button" className="bg-gray-500 text-white p-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
