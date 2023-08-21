import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Content'


export default function CartContainer() {
    const {cart,total,removeAllHandler} = useGlobalContext()
    if (cart.length === 0){
        return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
        )
    }
  return (
    <section className="cart">
        <header><h2>your bag</h2></header>
        <div>
            {
                cart.map((cartItem,index)=>{
                    return <CartItem key={index} {...cartItem}/>                    
                })
            }
        </div>
        <footer>
            <hr />
            <div className="cart-total">
            <h4>total <span>{total}</span></h4>
            </div>
            <button className="btn clear-btn" onClick={()=>{removeAllHandler()}}>clear cart</button>
        </footer>
    </section>
  )
}
