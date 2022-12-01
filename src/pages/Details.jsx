import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { MainContext } from '../context'
// import Data from '../data/data'
const Details = (props) => {
  const {onAdd}=props
  const {info}=useContext(MainContext)
 const {id}=useParams()
 const {addItem}=useCart()
 const detailData=info.find((a)=>a.id == id)
  return (
    <>
    <h1>{detailData.title}</h1>
    <img height={300} src={detailData.image} alt="" />
    <h1>{detailData.category}</h1>
    <h2> $ {detailData.price}</h2>
    <button onClick={()=>{addItem(detailData,alert('success'))}} className=' mx-2 btn btn-primary'>Add to wishlist</button>
    <button onClick={()=>onAdd(detailData,alert('success'))} className='btn btn-success'>Add to cart</button>
    </>    
  )
}

export default Details