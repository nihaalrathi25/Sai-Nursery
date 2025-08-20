import React from "react";
import { ShoppingCart } from "lucide-react"; // nice cart icon
import { useNavigate } from "react-router-dom";

const Header = ({ plants }) => {
    const navigate=useNavigate()
  return (
    <header className="bg-green-600 text-white flex items-center justify-between px-6 py-3 shadow-md">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-3 cursor-pointer"
      onClick={()=>navigate('/')}
      >
        {/* Circle Logo */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-green-600 text-2xl "
          >🌱</span>
        </div>
        {/* Name */}
        <div>
          <h1 className="text-lg font-bold">Sai Nursery</h1>
          <p className="text-xs italic opacity-80">
            Where Green Meets Serenity
          </p>
        </div>
      </div>

      {/* Center: Nav */}
      <nav>
        <ul className="flex space-x-8 text-md font-semibold">
          <li className="hover:text-green-200 cursor-pointer">Plants</li>
        </ul>
      </nav>

      {/* Right: Cart */}
      <div className="relative cursor-pointer"
      onClick={()=>navigate('/Cart')}>
        <ShoppingCart className="w-6 h-6" />
        {plants > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-green-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {plants}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
