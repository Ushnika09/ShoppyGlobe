import React from 'react'

function Cartitem({cartItems}) {
  return (
    <div>
      {
        cartItems.map((cartItems,i)=>{
          return(
            <div>
              <Cartitem cartItems={cartItems}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cartitem