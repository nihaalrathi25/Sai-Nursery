import React, { useState, useEffect } from "react";

const Cartplant = ({ plant, cart, setCart }) => {
  const [count, setCount] = useState(plant.volume);

  // keep local count synced with cart updates
  useEffect(() => {
    setCount(plant.volume);
  }, [plant.volume]);

  const updateVolume = (op) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === plant.name
            ? {
                ...item,
                volume: op === "add" ? item.volume + 1 : item.volume - 1,
              }
            : item
        )
        .filter((item) => item.volume > 0) // remove if volume = 0
    );
  };

  const deletePlant = () => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== plant.name));
  };

  return (
    <div className="flex items-center gap-6 p-4 border rounded-lg shadow-md bg-white">
      {/* Plant Image */}
      <img
        src={plant.image}
        alt={plant.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Plant Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{plant.name}</h3>
        <h3 className="font-semibold text-lg">${plant.price}</h3>
        <p className="text-gray-600">
          Total Price: ${plant.price} × {count} ={" "}
          <span className="font-bold">${plant.price * count}</span>
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-2">
          <button
            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => updateVolume("add")}
          >
            +
          </button>

          <span className="text-lg font-medium">{count}</span>

          <button
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => updateVolume("sub")}
          >
            -
          </button>
        </div>
      </div>

      {/* Delete Button */}
      <button
        className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
        onClick={deletePlant}
      >
        Delete
      </button>
    </div>
  );
};

export default Cartplant;
