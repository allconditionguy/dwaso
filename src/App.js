import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductList from './components/productlist';

function App() {
  return (
    <Router>
  <div>
  <header className="bg-white text-black p-4">
    <div className="container mx-auto flex flex-col items-center space-y-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">Dwaso</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-4 font-poppins">
        <a href="#about-us" className="hover:text-gray-500 transition-colors duration-200">
          About Us
        </a>
        <a href="#contact-us" className="hover:text-gray-500 transition-colors duration-200">
          Contact Us
        </a>
        <a href="#more" className="hover:text-gray-500 transition-colors duration-200">
          More
        </a>
      </nav>

      {/* Get Started Button */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-poppins transition-transform duration-200 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  </header>

  <div className="container mx-auto mt-8">
    <div>
      {/* Content */}
    </div>
  </div>
</div>
      <Routes>
          <Route path="/" element={<ProductList/>} />           
          <Route path="/new-product" element={<AddProduct/>} /> 
          <Route path="/edit-product" element={<EditProduct/>} />
        </Routes>
</Router>
  );
}

export default App;
