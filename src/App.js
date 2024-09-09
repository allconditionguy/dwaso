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
    <div className="container mx-auto flex items-center justify-between flex-wrap">
      <div className="flex-shrink-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dwaso</h1>
      </div>
       <nav className="flex space-x-4">
        <a href="#about-us" className="hover:text-gray-500 transition-colors duration-200 text-sm sm:text-base">
          About Us
        </a>
        <a href="#contact-us" className="hover:text-gray-500 transition-colors duration-200 text-sm sm:text-base">
          Contact Us
        </a>
        <a href="#more" className="hover:text-gray-500 transition-colors duration-200 text-sm sm:text-base">
          More
        </a>
      </nav>
        <div className="flex-shrink-0">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded font-poppins text-sm sm:text-base transition-transform duration-200 hover:scale-105">
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
