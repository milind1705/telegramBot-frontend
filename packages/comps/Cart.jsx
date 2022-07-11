

export default function Cart({cartItems }){
    const totalPrice = cartItems.reduce((a,c)=> a + c.price * c.quantity, 0)
return(

   <div className="flex flex-row gap-8 py-2 pl-3">
    {cartItems.length === 0 ? "No Items in Cart" : ""} <br /><span>Total Price :₹ {totalPrice}</span>
  
    <button className="px-6 py-1 rounded-md bg-green text-white">{cartItems.length === 0 ? "Order" : "Checkout"}</button>
   </div>
)
}