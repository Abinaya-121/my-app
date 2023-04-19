import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/cartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'NIKE Shoes',
      category: 'Shoes',
      seller: 'AMAZON',
      price: 1999
    },
    {
      url: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'NIKE SHOE',
      category: 'SHOES',
      seller: 'FLIPKART',
      price: 2599
    },
    {
      url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'NIKE SHOE',
      category: 'Laptops',
      seller: 'AMAZON',
      price: 50000
    },
    {
      url: 'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'TITAN WATCH',
      category: 'WATCHES',
      seller: 'WATCH LTD',
      price: 4000
    },
    {
      url: 'https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'TITAN BRAND',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://images.unsplash.com/photo-1629581678313-36cf745a9af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'TITAN WATCH',
      category: 'WATCH',
      seller: 'WATCH Ltd',
      price: 1000 
    },
    {
      url: 'https://images.unsplash.com/photo-1528968620-57e0257ff360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'TITAN WATCH',
      category: 'WATCHES',
      seller: 'WATCH Ltd',
      price: 100
    },
    {
      url: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'BRAND WATCH',
      category: 'WATCHES',
      seller: 'WATCHES Ltd',
      price: 100
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'NIKE KIDS SHOE',
      category: 'SHOES',
      seller: 'SHOES Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;