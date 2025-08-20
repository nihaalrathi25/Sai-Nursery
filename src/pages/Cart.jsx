import React from "react";
import Cartplant from "../components/Cartplant";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.volume,
    0
  );

  // 👉 total count of all items in cart
  const totalPlants = cart.reduce((acc, item) => acc + item.volume, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header plants={totalPlants} />

      {/* Total Amount */}
      <h2 className="text-3xl font-bold mb-6 text-center mt-6">
        Total Cart Amount:{" "}
        <span className="text-green-600">${totalAmount.toFixed(2)}</span>
      </h2>

      {/* Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {cart.length > 0 ? (
          cart.map((plant, index) => (
            <Cartplant
              key={index}
              plant={plant}
              cart={cart}
              setCart={setCart}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            Your cart is empty 🛒
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          onClick={() => navigate("/product-listing")}
        >
          Continue Shopping
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          onClick={() => navigate("/")}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
