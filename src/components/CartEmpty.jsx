import emptyCart from '../assets/emptyCart.png'


function CartEmpty() {
    return (
     <div className="w-full h-full ">
        <div className='sm:w-4/6 m-auto md:w-auto'>
            <img className=' w-full h-full object-cover' src={emptyCart} alt="Empty-Cart" />
        </div>
        <div className='text-center md:p-10 p-2'> 
            <h1 className='md:text-2xl text-lg font-bold text-red-500'>Your Card is Empty!</h1>
            <p>Explore products and add something to your cart.</p>
        </div>
   
     </div>
    )
  }
  
  export default CartEmpty;
  