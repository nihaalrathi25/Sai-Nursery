import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate=useNavigate()
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1493673272479-a20888bcee10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHBsYW50fGVufDB8fDB8fHww')", // replace with your plant image
      }}
    >
      {/* Left Section */}
      <div className="text-white flex-[1] px-4">
        <h1 className="text-3xl font-bold mb-4">Welcome To<br/> Sai Nursery</h1>
        <p className="text-xl mb-6">Where Green Meets Serenity</p>
        <button 
        className="bg-green-500  hover:bg-green-700 rounded-s-lg text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
         onClick={() => navigate('/product-listing')}>
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="text-white p-8 rounded-lg shadow-lg flex-[3]">
        <h2 className=" items-center justify-center text-2xl font-semibold mb-4 pl-40">
          Welcome to Sai Nursery, where green meets serenity!
        </h2>
        <p className="mb-4">
          At Sai Nursery, we are passionate about bringing nature closer to
          you. Our mission is to provide a wide range of high-quality plants
          that not only enhance the beauty of your surroundings but also
          contribute to a healthier and more sustainable lifestyle.
        </p>
        <p className="mb-4">
          Our team of experts is dedicated to ensuring that each plant meets our
          strict standards of quality and care. Whether you’re a seasoned
          gardener or just starting your green journey, we’re here to support
          you every step of the way.
        </p>
        <p>
          Join us in our mission to create a greener, healthier world. Visit
          Sai Nursery today and experience the beauty of nature right at
          your doorstep.
        </p>
      </div>
    </div>
  )
}

export default Landing
