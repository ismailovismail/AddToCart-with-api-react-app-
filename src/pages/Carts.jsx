import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Carts = () => {
    const {items,removeItem,}=useCart()
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope='col'>Quantity</th>
      <th scope='col'>Del</th>
    </tr>  
  </thead>
  <tbody>
    
     { items.map((fd,i)=>{
        return (<tr>
            <th scope="row">{i+1}</th>
            <td><img width={70} src={fd.image} alt="" /></td>
            <td>{fd.title}</td>
            <td><Link to={`/${fd.id}`}  className='btn btn-secondary'>Go to cart</Link></td>
            <td><button onClick={()=>{removeItem(fd.id)}} className='btn btn-danger'>Delete</button></td>
            </tr>
        )

     })
       
     }

  </tbody>
</table>
    </>
  )
}

export default Carts