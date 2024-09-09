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
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">Dwaso</h1>
      </div>

      <div className="block lg:hidden">
        <button
          className="text-gray-900 focus:outline-none"
          id="nav-toggle"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav
        className="hidden lg:flex flex-grow justify-center items-center space-x-8 font-poppins"
        id="nav-menu"
      >
        <ul className="flex space-x-8">
          <li>
            <a href="#about-us" className="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact-us" className="hover:text-gray-400">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#more" className="hover:text-gray-400">
              More
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex-shrink-0 hidden lg:block">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-poppins">
          Get Started
        </button>
      </div>
    </div>
    <div className="lg:hidden" id="mobile-menu">
      <ul className="flex flex-col space-y-4 mt-4 font-poppins">
        <li>
          <a href="#about-us" className="hover:text-gray-400">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact-us" className="hover:text-gray-400">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#more" className="hover:text-gray-400">
            More
          </a>
        </li>
        <li>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-poppins">
            Get Started
          </button>
        </li>
      </ul>
    </div>
  </header>
  <div className="container mx-auto mt-8">
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
