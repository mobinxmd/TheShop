import { FaShoppingCart } from "react-icons/fa";
function Navbar({carts, setIsOpen}) {
  return (
    <div className="w-screen h-14 shadow md:px-12 px-4 md:text-lg text-white bg-pink-900 flex justify-between items-center">
      <h1>
        <span className="text-green-400">The</span>
        <span className=" font-semibold">Shop</span>
      </h1>

      <div className="hover:bg-white cursor-pointer invisible md:visible hover:text-red-900 h-full flex justify-center items-center transition-colors ease-in-out">
        <span className="px-3 font-semibold">Products</span>
      </div>

      <span className="relative">
        <button onClick={()=> setIsOpen((isOpen)=>!isOpen)} className="md:text-2xl text-lg">
          <FaShoppingCart />
        </button>
        <span className={`rounded-full transition ${carts.length === 0? "invisible scale-50" : "visible scale-100"} absolute ease-in-out bg-pink-600 px-[5px] -top-2 -right-2 text-xs`}>
          {carts.length}
        </span>
      </span>
    </div>
  );
}

export default Navbar;
