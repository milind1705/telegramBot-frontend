

export default function Cart({cartItems }){
    const totalPrice = cartItems.reduce((a,c)=> a + c.price * c.quantity, 0)
return(

   <div>
    {cartItems.length === 0 ? "No Items in Cart" : ""} <br /><span>Total Price : {totalPrice}</span>
  
    <button>{cartItems.length === 0 ? "Order" : "Checkout"}</button>
   </div>
)
}