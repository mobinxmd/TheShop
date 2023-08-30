import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsCaretRightFill } from 'react-icons/bs';



function CartItem( {cart, deleteFromCart, updateQuantity}) {
const [quantity, setQuantity] = useState(1)

    const handlePrev = ()=>{
         const newQuantity = quantity !== 1? quantity - 1 : quantity;
        setQuantity(newQuantity);
        updateQuantity(cart.id, newQuantity);
    }
    const handleNext=()=>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(cart.id, newQuantity);
    };

    return (
     <div className="rounded-lg sm:h-44 h-28 overflow-hidden">
        <div className="w-full h-3/6  sm:h-4/6 relative">
            <button onClick={()=> deleteFromCart(cart.id)} className='absolute top-1 right-1 text-white p-1 rounded-full bg-pink-900 text-md hover:scale-105'><IoMdClose /></button>
            <img className='object-cover w-full h-full' src={cart.image} alt="NikeBlue" />
        </div>
        <div className='flex bg-white'>
            <div className='px-3 py-1 w-4/6'>
                <h1 className='font-bold md:text-lg tracking-widest'>{cart.name}</h1>
                <p className='font-bold'>${cart.price}</p>
            </div>
            <div className='w-2/6 flex justify-center items-center'>
                <div className='flex'>
                    <button onClick={handlePrev} className='py-1 px-2 bg-pink-900 hover:bg-pink-950 hover:text-white text-white rounded-s me-1'><BsFillCaretLeftFill /> </button>
                        <span className='px-3  bg-slate-200'>{cart.quantity}</span>
                    <button onClick={handleNext} className='py-1 px-2 bg-pink-900 hover:bg-pink-950  hover:text-white text-white rounded-e ms-1'><BsCaretRightFill /> </button>
                </div>
            </div>
        </div>
     </div>
    )
  }
  
  export default CartItem
  