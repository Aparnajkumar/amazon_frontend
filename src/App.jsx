
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
const products = [
  {
    id: 1,
    title: "Boat Rockerz 450 Bluetooth Headphones",
    price: 1499,
    image:
      "https://m.media-amazon.com/images/I/61u1VALn6JL._SX522_.jpg",
  },
  {
    id: 2,
    title: "Noise ColorFit Pulse Smart Watch",
    price: 1799,
    image:
      "https://m.media-amazon.com/images/I/61epn29QG0L._SX522_.jpg",
  },
  {
    id: 3,
    title: "HP Wireless Keyboard & Mouse Combo",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7YhL5zF9dGi1U9Jv-cGeePm6CPzUwj9_9w&s",
  },
  {
    id: 4,
    title: "AmazonBasics USB C Cable",
    price: 399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC78PajCPQCOaJ3wv2X8xQun-eO6fqJNLoWw&s",
  },
];
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
<Route path="/product/:id" element={<ProductDetails products={products} />} />   
   <Route path='/cart' element={<Cart/>}/>

     
      </Routes> 
    </>
  )
}

export default App
