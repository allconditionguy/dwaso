import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductList from './components/productlist';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-white-800 text-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Dwaso</h1>
            </div>

            <nav className="flex-grow">
              <ul className="flex justify-center space-x-8 font-poppins">
                <li>
                  <a href="#about-us" className="hover:text-gray-400">About Us</a>
                </li>
                <li>
                  <a href="#contact-us" className="hover:text-gray-400">Contact Us</a>
                </li>
                <li>
                  <a href="#more" className="hover:text-gray-400">More</a>
                </li>
              </ul>
            </nav>

            <div className="flex-shrink-0">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-poppins">
                Get Started
              </button>
            </div>
          </div>
        </header>
        <div className="container mx-auto mt-8">
          <nav className="mb-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/new-product" className="text-blue-500 hover:underline">Add Product</Link>
              </li>
              <li>
                <Link to="/edit-product" className="text-blue-500 hover:underline">Edit Product</Link>
              </li>
            </ul>
          </nav>
          <div>

        <Routes>
          <Route path="/" element={<ProductList/>} />           
          <Route path="/new-product" element={<AddProduct/>} /> 
          <Route path="/edit-product" element={<EditProduct/>} />
        </Routes>
      </div>
      </div>
        </div>
    </Router>
  );
}

export default App;
