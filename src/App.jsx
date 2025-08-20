import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/landing'
import { Route, Routes } from 'react-router-dom'
import ProductListing from './pages/Product'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)
 const [plants,setPlants]=useState(0)
 const[cart,setCart]=useState([ ])
  return (
   
      <Routes>
     <Route path="/" element={<Landing plants={plants} setPlants={setPlants} />} />
      <Route
        path="/product-listing"
        element={<ProductListing 
          plants={plants} setPlants={setPlants}
          cart={cart} setCart={setCart} />}
      />
      <Route path="/Cart" element={<Cart 
      plants={plants} setPlants={setPlants}
      cart={cart} setCart={setCart} />} />
    </Routes>
  )
}

export default App
