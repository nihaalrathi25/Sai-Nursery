import React from 'react'

const Crad = ({ name, price, description, image, onAddToCart, sale, cart }) => {
  // ✅ Check if this plant already exists in cart
  const isInCart = cart.some((item) => item.name === name);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-64 relative">
      {/* SALE Badge */}
      {sale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </span>
      )}

      {/* Image */}
      <img
        src={image}
        alt={name}
      className="w-full h-40 object-contain"
      />

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-red-500 font-bold text-xl">${price}</p>
        <p className="text-gray-600 italic text-sm mt-1">{description}</p>

        {/* Button */}
        <button
          onClick={() => !isInCart && onAddToCart()} // only run if not already in cart
          disabled={isInCart}
          className={`mt-4 px-4 py-2 rounded-lg w-full ${
            isInCart
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Crad;
