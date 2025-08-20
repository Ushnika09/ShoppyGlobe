import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart, increaseQty, decreaseQty } from '../redux/cartSlice'
import delIcon from '../assets/del.png'
import OrderSummary from './OrderSummary'
import CheckoutModal from './CheckoutModal'

function Cartitem() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  // Group items by id and sum quantity
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = item.id
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 }
    } else {
      acc[key].quantity += 1
    }
    return acc
  }, {})

  const groupedArr = Object.values(groupedItems)
  const totalItems = cartItems.length

  if (totalItems === 0) {
    return <div className="text-center py-10 text-gray-500">Your cart is empty.</div>
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-start my-[2rem]">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl w-full border border-gray-200">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <h2 className="text-3xl font-bold text-[#00BFFF]">
            Shopping Cart <span className="text-black text-2xl font-medium">({totalItems} items)</span>
          </h2>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-500 border border-red-200 rounded-lg font-semibold hover:bg-red-100 hover:text-red-600 transition text-lg shadow-sm"
            onClick={() => dispatch(clearCart())}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear Cart
          </button>
        </div>
        <div className="divide-y">
          {groupedArr.map((item) => (
            <div key={item.id} className="flex items-center py-6">
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-contain rounded-lg" />
              <div className="flex-1 ml-6">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-base">${item.price} each</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 flex items-center justify-center font-bold rounded-full bg-gray-100 text-xl text-[#00BFFF] hover:bg-[#e0f7ff] transition"
                  onClick={() => dispatch(decreaseQty(item.id))}
                  disabled={item.quantity <= 1}
                  title="Decrease quantity"
                >-</button>
                <span className="font-semibold text-lg w-6 text-center">{item.quantity}</span>
                <button
                  className="w-8 h-8 flex items-center justify-center font-bold rounded-full bg-gray-100 text-xl text-[#00BFFF] hover:bg-[#e0f7ff] transition"
                  onClick={() => dispatch(increaseQty(item))}
                  title="Increase quantity"
                >+</button>
              </div>
              <div className="w-24 text-right font-semibold text-lg text-gray-700">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="ml-4 p-2 hover:bg-red-100 rounded transition"
                onClick={() => dispatch(removeFromCart(item.id))}
                title="Remove"
              >
                <img src={delIcon} alt="Delete" className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-sm">
        <OrderSummary onCheckout={() => setShowCheckout(true)} />
      </div>
      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </div>
  )
}

export default Cartitem