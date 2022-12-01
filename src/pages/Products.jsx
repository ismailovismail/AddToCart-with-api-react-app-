import React from 'react'

const Products = (props) => {
    const {cartItems,onAdd,onRemove,onDelete}=props;
    const itemsPrice=cartItems.reduce((a,c)=>a + c.qty * c.price,0);
    const taxPrice=itemsPrice*0.14;
    const shippingPrice=itemsPrice>2000? 0 :20;
    const totalPrice=itemsPrice+taxPrice+shippingPrice;
  return (
    <>
     <table className="table">
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
    { cartItems.length === 0 && <div className='mx-2'>Cart is empty</div>  }
     { cartItems.map((fd,i)=>{
        return (<tr key={i}>
            <th scope="row">{i+1}</th>
            <td><img width={70} src={fd.image} alt="" /></td>
            <td>{fd.title}</td>
            <td>{(fd.price*fd.qty).toFixed(2)}</td>
            <td><button onClick={()=>onAdd(fd)} className='btn btn-primary'>+</button> {fd.qty} <button onClick={()=>onRemove(fd)} className='btn btn-primary'>-</button> </td>
            <td><button onClick={()=>{onDelete(fd)}} className='btn btn-danger'>Delete</button></td>
            </tr>
        )

     })
       
     }
    

  </tbody>
</table>
{cartItems.length !== 0 && (
        <>
         <hr />
         <div className="inform mx-2">
            <div className="items-price">Items Price: $ {itemsPrice.toFixed(2)} </div>
            <div className="tax-price">Tax Price: $ {taxPrice.toFixed(2)} </div>
            <div className="shipping-price">Shipping Price: $ {shippingPrice.toFixed(2)} </div>
            <div className="total-price">Total Price: $ {totalPrice.toFixed(2)} </div>
            <div className="check-btn"><button onClick={()=>{alert('Implement Checkout!')}}  className='btn btn-primary'>Checkout</button></div>
         </div>
        </>
     ) }

    </>
  )
}

export default Products