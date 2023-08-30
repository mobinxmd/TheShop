
import { BsFillCartPlusFill } from 'react-icons/bs';

function ProductCard({product, addToCart}) {
    return (
     <div className="rounded-md md:w-52 bg-white h-64 overflow-hidden shadow-md">
        <div className='h-3/6'>
            <img className='object-cover w-full h-full' src={product.image} alt="Nike-Blue" />
        </div>
        <div className='grid md:grid-rows-2 h-28 '>
            <div className='px-3 pt-2 bg-white items-center justify-between '>
                <span className='px-2 py-1 rounded-full text-xs bg-green-200 text-green-800'><small>New</small></span>
                <h1 className='font-bold mt-2 text-slate-700'>{product.name}</h1>
            </div>
            <div className=' flex px-3  justify-between items-center'>
                <p className='font-bold flex items-center gap-1'>${product.price}<span className='small text-xs font-thin text-gray-400'><s>20% Off</s></span></p>
                ‌<button onClick={()=> addToCart(product.id)} className='text-2xl text-pink-900 pe-2 hover:scale-105 transition'><BsFillCartPlusFill /></button>
            </div>
        </div>
     </div>
    )
  }
  
  export default ProductCard
  