import React, { useState } from 'react'
import api, { BASE_URL } from '../../api'
import { toast } from 'react-toastify'

function CartItem({item,setCartTotal,cartitems,setNumberCartItems,setCartItems}) {
    const [quantity,setQuantity]=useState(item.quantity)
    const [loading,setLoading]=useState(false)
    const itemData={quantity:quantity,item_id:item.id}
    const itemID={item_id:item.id}
    function deleteCartitem(){
        const confirmDelete=window.confirm("are you sure you want to delete")
        if(confirmDelete){
            api.post("delete_cartitem/",itemID)
            .then(res=>{
                console.log(res.data)
                toast.success("cart item deleted successfully")
                setCartItems(cartitems.filter(cartitem=>cartitem.id!= item.id))
                setCartTotal(cartitems.filter((cartitem)=>cartitem.id != item.id)
                .reduce((acc,curr)=>acc+curr.total,0))
    
                setNumberCartItems(cartitems.filter((cartitem)=>cartitem.id!=item.id)
                .reduce((acc,curr) =>acc+curr.quantity,0))
            })
            .catch(err=>{
                console.log(err.message)
            })
        }
    }
    function updateCartitem(){
        setLoading(true)
        api.patch("update_quantity/",itemData)
        .then(res=>{
            console.log(res.data)
            setLoading(false)
            toast.success("cart item updated successusfully")
            setCartTotal(cartitems.map((cartitem)=>cartitem.id === item.id? res.data.data:cartitem)
            .reduce((acc,curr)=>acc+curr.total,0))

            setNumberCartItems(cartitems.map((cartitem)=>cartitem.id===item.id?res.data.data:cartitem)
            .reduce((acc,curr) =>acc+curr.quantity,0))
            
        })
        .catch(err=>{
            console.log(err.message)
            setLoading(false)
        })
    }
    return (
        <div className="col-md-12">
            <div 
                className="cart-item d-flex align-items-center mb-3 p-3"
                style={{ backgroundColor: '#f8f9fa', borderRadius: '89px' }}
            >
                <img
                    src={`${BASE_URL}${item.product.image}`}
                    alt="Product Image"
                    className="img-fluid"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{`${item.product.name}`}</h5>
                    <p className="mb-0 text-muted">{`$${item.product.price}`}</p>
                </div>
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        className="form-control me-3"
                        min={1}
                        value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}
                        style={{ width: '70px' }}
                    />
                    <button className='btn btn-sm mx-2' onClick={updateCartitem} disabled={loading}
                     style={{backgroundColor:"blue",color:"white"}}
                    >{loading?"updating":"update"}</button>
                    <button className="btn btn-danger btn-sm" 
                     onClick={deleteCartitem} 
                    >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem