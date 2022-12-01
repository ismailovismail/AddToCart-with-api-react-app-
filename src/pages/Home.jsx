import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Home = () => {
  const [data,setData]=useState([])
   const[filter,setFilter]=useState(data)
 useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then((res)=>{
    setData(res)
    setFilter(res)
  })
  let btns=document.querySelectorAll('header .container-fluid button')
  for (let index of btns) {
     index.onclick=()=>{
      document.querySelector('header .container-fluid button.active').classList.remove('active')
      index.classList.add('active')
     }
  }
 },[])

  return (
    <>
      <header className='mt-3 mb-3'>
        <div className="container-fluid d-flex justify-content-center gap-3 ">
          <button onClick={()=>{
            setFilter(
              data.filter((fd)=>{
                return fd
              })
            )
          }} className='btn btn-outline-dark active'>All</button>
          <button onClick={()=>{
            setFilter(
              data.filter((fd)=>{
                return fd.category === "men's clothing"
              })
            )
          }} className='btn btn-outline-dark'>Men's Clothing</button>
          <button onClick={()=>{
            setFilter(
              data.filter((fd)=>{
                return fd.category === "women's clothing"
              })
            )
          }} className='btn btn-outline-dark'>Women's Clothing</button>
          <button onClick={()=>{
            setFilter(
              data.filter((fd)=>{
                return fd.category === "jewelery"
              })
            )
          }} className='btn btn-outline-dark'>Jewellery</button>
          <button onClick={()=>{
            setFilter(
              data.filter((fd)=>{
                return fd.category === "electronics"
              })
            )
          }} className='btn btn-outline-dark'>Electronics</button>
        </div> 
      </header>
    <div className="container-fluid" style={{width:'100%'}} >
    <div className="row d-flex justify-content-center gap-2" style={{width:'100%'}} >
      {
        filter.map((fd)=>{
          return(
            
              <div key={fd.id} className="card col-12 col-sm-12 col-md-3 " style={{width:'20rem'}} >
                <img height={250} src={fd.image} className='card-img-top'  alt="" />
                <div className="card-body">
                  <h1 className="card-title">{fd.title}</h1>
                  <p className="card-text">{fd.category}</p>
                  <h2 className="card-title"> $ {fd.price}</h2>
                  <Link to={`/${fd.id}`} className='btn btn-primary' >Details</Link>
                </div>
              </div>
            
          )
        })
      }
     </div>
    </div>
    </>
  )
}

export default Home