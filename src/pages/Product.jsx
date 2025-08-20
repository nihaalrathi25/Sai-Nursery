import React from "react";
import Header from "../components/Header";
import Crad from "../components/Crad";

const ProductListing = ({ plants, setPlants, cart, setCart }) => {
  const addPlantToCart = (plant) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === plant.name);

      if (index >= 0) {
        // ✅ if plant already exists, increase volume
        const updatedCart = [...prevCart];
        updatedCart[index] = {
          ...updatedCart[index],
          volume: (updatedCart[index].volume || 1) + 1,
        };
        return updatedCart;
      } else {
        // ✅ if plant is new, add it with volume = 1
        return [...prevCart, { ...plant, volume: 1 }];
      }
    });

    setPlants(plants + 1); // update cart count
  };
  const outdoorPlants = [
  {
    name: "Money Plant",
    price: 25,
    description: "Considered lucky, grows well outdoors and indoors.",
    image:
"https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uZXklMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
    sale: false,
  },
  {
    name: "Bamboo Palm",
    price: 32,
    description: "Popular for landscaping, provides shade and greenery.",
    image:
"https://plus.unsplash.com/premium_photo-1680995369609-0b16b2f6d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFtYm9vJTIwcGFsbXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    name: "Croton",
    price: 28,
    description: "Colorful leaves, thrives in bright outdoor spots.",
    image:
"https://images.unsplash.com/photo-1630419544962-97655e1e88c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvdG9ufGVufDB8fDB8fHww",
    sale: false,
  },
  {
    name: "Fern Plant",
    price: 15,
    description: "Hardy plant that grows well in shaded outdoor areas.",
    image:
"https://images.unsplash.com/photo-1740489799559-9be7ce0c862c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVybiUyMHBsYW50fGVufDB8fDB8fHww",
    sale: true,
  },
];

  const succulentPlants = [
  {
    name: "Echeveria",
    price: 8,
    description: "Compact rosette succulent, easy to care for.",
    image:
"https://images.unsplash.com/photo-1637634378442-4c59ae44c7cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWNoZXZlcmlhfGVufDB8fDB8fHww",
    sale: true,
  },
  {
    name: "Cactus Mix",
    price: 18,
    description: "Assorted cacti for a desert look indoors.",
    image:
"https://images.unsplash.com/photo-1585322081891-63c73e2703fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhY3R1cyUyMG1peHxlbnwwfHwwfHx8MA%3D%3D",
    sale: false,
  },
  {
    name: "Haworthia",
    price: 10,
    description: "Small spiky succulent, thrives in indirect light.",
    image:
"https://images.unsplash.com/photo-1711690161377-ba1bd24ab27c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGF3b3J0aGlhfGVufDB8fDB8fHww",
    sale: false,
  },
  {
    name: "Barrel Cactus",
    price: 20,
    description: "Round cactus, adds character to any corner.",
    image:
"https://images.unsplash.com/photo-1688344834969-1bb7a78bd079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFycmVsJTIwQ2FjdHVzfGVufDB8fDB8fHww",
    sale: true,
  },
];

  const indoorPlants = [
  {
    name: "ZZ Plant",
    price: 30,
    description: "Low-maintenance plant that thrives in low light.",
    image:
"https://plus.unsplash.com/premium_photo-1669870413077-93390b44baf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8enolMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
    sale: false,
  },
  {
    name: "Pothos",
    price: 12,
    description: "Fast-growing vine, perfect for hanging pots.",
    image:
"https://plus.unsplash.com/premium_photo-1673969608398-18921179fa7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90aG9zfGVufDB8fDB8fHww",
    sale: true,
  },
  {
    name: "Rubber Plant",
    price: 35,
    description: "Stylish indoor plant with glossy green leaves.",
    image:
"https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnViYmVyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    sale: false,
  },
  {
    name: "Fiddle Leaf Fig",
    price: 45,
    description: "Trendy indoor plant with broad violin-shaped leaves.",
    image:
"https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlkZGxlJTIwbGVhZiUyMGZpZ3xlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
];

  const floweringPlants = [
  {
    name: "Rose Plant",
    price: 18,
    description: "Classic flowering plant with fragrant blooms.",
    image:
"https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    name: "Hibiscus",
    price: 22,
    description: "Bright flowers that attract butterflies and bees.",
    image:
"https://images.unsplash.com/photo-1622396727845-c15ef9ffb419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGliaXNjdXN8ZW58MHx8MHx8fDA%3D",
    sale: false,
  },
  {
    name: "Jasmine",
    price: 15,
    description: "Sweet-smelling flowers, perfect for indoors and gardens.",
    image:
"https://images.unsplash.com/photo-1623171404570-1d196759fe20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFzbWluZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    name: "Bougainvillea",
    price: 28,
    description: "Hardy plant with vibrant and colorful flowers.",
    image:
"https://images.unsplash.com/photo-1687936682320-93480a2a69bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sale: false,
  },
];


  const airPurifying = [
    {
      name: "Snake Plant",
      price: 15,
      description: "Produces oxygen at night, improving air quality.",
      image:
"https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25ha2UlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
      sale: true,
    },
    {
      name: "Peace Lily",
      price: 20,
      description: "Great for removing toxins from the air.",
      image:
        "https://images.unsplash.com/photo-1676628443324-6782e01aa4a8?q=80&w=629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sale: false,
    },
    {
      name: "Aloe Vera",
      price: 10,
      description: "Known for medicinal and air-purifying qualities.",
      image:
        "https://plus.unsplash.com/premium_photo-1688045553706-e2c642bfa410?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sale: true,
    },
    {
      name: "Areca Palm",
      price: 25,
      description: "One of the best air-humidifying plants.",
      image:
"https://images.unsplash.com/photo-1615309363679-fed456ff8113?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sale: false,
    },
  ];

  return (
    <div>
      <Header plants={plants} />
      <h2 className="font-bold text-2xl flex justify-center items-center text-center mt-8">
  Air Purifying Plants
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pl-24">
  {airPurifying.map((plant, index) => (
    <Crad
      key={index}
      name={plant.name}
      price={plant.price}
      description={plant.description}
      image={plant.image}
      sale={plant.sale}
      cart={cart}
      onAddToCart={() => addPlantToCart(plant)}
    />
  ))}
</div>

{/* 🌿 Indoor Plants */}
<h2 className="font-bold text-2xl flex justify-center items-center text-center mt-8">
  Indoor Plants
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pl-24">
  {indoorPlants.map((plant, index) => (
    <Crad
      key={index}
      name={plant.name}
      price={plant.price}
      description={plant.description}
      image={plant.image}
      sale={plant.sale}
      cart={cart}
      onAddToCart={() => addPlantToCart(plant)}
    />
  ))}
</div>

{/* 🌸 Flowering Plants */}
<h2 className="font-bold text-2xl flex justify-center items-center text-center mt-8">
  Flowering Plants
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pl-24">
  {floweringPlants.map((plant, index) => (
    <Crad
      key={index}
      name={plant.name}
      price={plant.price}
      description={plant.description}
      image={plant.image}
      sale={plant.sale}
      cart={cart}
      onAddToCart={() => addPlantToCart(plant)}
    />
  ))}
</div>

{/* 🌞 Outdoor Plants */}
<h2 className="font-bold text-2xl flex justify-center items-center text-center mt-8">
  Outdoor Plants
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pl-24">
  {outdoorPlants.map((plant, index) => (
    <Crad
      key={index}
      name={plant.name}
      price={plant.price}
      description={plant.description}
      image={plant.image}
      sale={plant.sale}
      cart={cart}
      onAddToCart={() => addPlantToCart(plant)}
    />
  ))}
</div>

{/* 🌵 Succulent Plants */}
<h2 className="font-bold text-2xl flex justify-center items-center text-center mt-8">
  Succulent Plants
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pl-24">
  {succulentPlants.map((plant, index) => (
    <Crad
      key={index}
      name={plant.name}
      price={plant.price}
      description={plant.description}
      image={plant.image}
      sale={plant.sale}
      cart={cart}
      onAddToCart={() => addPlantToCart(plant)}
    />
  ))}
</div>

    </div>
  );
};

export default ProductListing;
