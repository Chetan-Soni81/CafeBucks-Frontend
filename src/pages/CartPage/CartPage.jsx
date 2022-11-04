import React from 'react'
import './cartpage.css'

const CartPage = () => {
  return (
    <main>
      <div className="cart__content__panel container">
        <div className="cart__panel col-md-9 col-12">
          <h2>Shopping Cart</h2>
          <div className="cart__repeater">

          </div>
        </div>
        <div className="cart__buy col-md-3 col-12">
          <h3>Subtotal (n items): ₹xxxx</h3>
          <button >Proceed to buy</button>
        </div>
      </div>
    </main>
  )
}

export default CartPage