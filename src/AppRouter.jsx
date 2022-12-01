import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {CartProvider} from 'react-use-cart'
import Navbar from './Components/Navbar'
import { MainContext } from './context'
import Carts from './pages/Carts'
import Details from './pages/Details'
import Home from './pages/Home'
import Products from './pages/Products'
const AppRouter = () => {
  const [info,setInfo]=useState([])
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((data)=>{
  setInfo(data)
  setCartItems(
    localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]
  )
})

},[])
const Data={
info,
setInfo
}
 const [cartItems,setCartItems]=useState([])
 const onAdd =(product)=>{
   const exist=cartItems.find((a)=>a.id === product.id)
   if (exist) {
    const newCartItems=cartItems.map((a)=>a.id === product.id ? {...exist,qty:exist.qty+1}:a);
    setCartItems(newCartItems)
    localStorage.setItem('cartitems',JSON.stringify(newCartItems))
   }else{
    const newCartItems=[...cartItems,{...product,qty:1}]
    setCartItems(newCartItems)
    localStorage.setItem('cartitems',JSON.stringify(newCartItems))

   }
 }

 const onRemove=(product)=>{
  const exist = cartItems.find((a)=>a.id === product.id)
  if (exist.qty === 1) {
    const newCartItems=cartItems.filter((a)=>a.id !== product.id ) 
    setCartItems(newCartItems)
    localStorage.setItem('cartitems',JSON.stringify(newCartItems))
    
  }else{
    const newCartItems=cartItems.map((a)=>a.id === product.id ? {...exist,qty:exist.qty-1}:a)
    setCartItems(newCartItems)
    localStorage.setItem('cartitems',JSON.stringify(newCartItems))

  }
 } 
 const onDelete=(product)=>{
  const newCartItems=cartItems.filter((a)=>a.id !== product.id)
  setCartItems(newCartItems)
  localStorage.setItem('cartitems',JSON.stringify(newCartItems))

 }

  return (
    <BrowserRouter>
      <MainContext.Provider value={Data}>
      <CartProvider>
        <Navbar countCartItems={cartItems.length} />
      <Routes>
       <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} cartItems={cartItems} />}></Route>
        <Route path='/:id' element={<Details onAdd={onAdd} />}></Route>
        <Route path='/wishlist' element={<Carts/>}></Route>
      </Routes>
       </CartProvider>
      </MainContext.Provider>
    </BrowserRouter>
  )
}


export default AppRouter