import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { useEffect, useState } from "react";

function Cart({ carts, deleteFromCart, setCarts, orderedFun, isOpen}) {
  const [total, setTotal] = useState(0);
  const totalPrice = carts
    .map((cart) => cart.price * cart.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const tax = 10;

  function updateQuantity(id, qn) {
    setCarts((items) =>
      items.map((cart) =>
        cart.id === id ? { ...cart, quantity: (cart.quantity = qn) } : cart
      )
    );
    console.log(carts);
  }
  useEffect(() => {
    setTotal(totalPrice + tax);
  }, [totalPrice]);

function handleOrder(){
  
  if(carts.length > 0)orderedFun()
}

  return (
    <div className={` px-6  md:py-4 absolute h-[89%] md:h-full z-10 md:static left-2 top-1 sm:right-0 rounded-lg shadow-md md:shadow-none  bg-slate-300 flex flex-col justify-between`}>
      <div>
        <h1 className="font-semibold py-2 sm:py-3  text-pink-900">Order Summary</h1>
        <div className="gap-2 grid max-h-72 sm:max-h-96 overflow-auto">
          {carts.length === 0 ? (
            <CartEmpty />
          ) : (
            carts.map((cart) => (
              <CartItem
                cart={cart}
                deleteFromCart={deleteFromCart}
                key={cart.id}
                updateQuantity={updateQuantity}
                
              />
            ))
          )}
        </div>
      </div>
      <div className={`${carts.length === 0 ? "invisible translate-y-10" : "visible translate-y-0"} transition ease-in-out `}>
        <div className="flex justify-between font-semibold p-2">
          <p>Shipping</p>
          <p className="text-pink-900 font-semibold">Free</p>
        </div>
        <div className="flex justify-between font-semibold p-2 ">
          <p>Payment Method</p>
          <p className="text-pink-900 font-semibold">Cash On Delivery</p>
        </div>
        <div className="flex justify-between font-semibold p-2 ">
          <p>Tax</p>
          <p>$10</p>
        </div>
        <div className="flex justify-between p-2 font-bold">
          <p>Total</p>
          <p>${total}</p>
        </div>
        <button onClick={handleOrder} className="bg-pink-900 w-full hover:bg-pink-950 text-white md:p-3 p-3 mb-3 md:mb-0 rounded-lg">
          Place Order!
        </button>
      </div>
    </div>
  );
}

export default Cart;
