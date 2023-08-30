import ShoppingList from "./components/ShoppingList.jsx";
import "./index.css";
import Cart from "./components/Cart.jsx";
import adidasPink from "./assets/Addidas-Pink.jpg";
import adidasBlackWhite from "./assets/Adidas-BlackWhite.jpg";
import jordanBlack from "./assets/Jordan-AllBlack.jpg";
import nikeBlue from "./assets/Nike-Blue.png";
import nikeNeon from "./assets/NikeNeon.jpg";
import nikeRed from "./assets/Nike-Red.jpg";
import nikeOrange from "./assets/Nike-Orange.jpg";
import puma from "./assets/Puma-Casuals.jpg";
import pumaRedStrips from "./assets/PumaRedStrips.jpg";
import FilaWhite from "./assets/FilaWhite.jpg";
import NikeRunner from "./assets/NikeRunner.jpg";
import BalenciagaGray from "./assets/BalenciagaWhite.jpg";
import { useState } from "react";
import { BsPatchCheckFill } from 'react-icons/bs';
import Navbar from "./components/Navbar.jsx";

const products = [
  { id: 1, name: "Nike Air Max", price: 180, image: nikeBlue, quantity: 1 },
  {
    id: 2,
    name: "Adidas Black & White",
    price: 220,
    image: adidasBlackWhite,
    quantity: 1,
  },
  {
    id: 3,
    name: "Adidas Legend Pink",
    price: 230,
    image: adidasPink,
    quantity: 1,
  },
  {
    id: 4,
    name: "Jordan Pure Black",
    price: 350,
    image: jordanBlack,
    quantity: 1,
  },
  {
    id: 5,
    name: "Nike Athletic Neon",
    price: 170,
    image: nikeNeon,
    quantity: 1,
  },
  { id: 6, name: "Nike Athletic Red", price: 270, image: nikeRed, quantity: 1 },
  {
    id: 7,
    name: "Nike Athletic Orange",
    price: 270,
    image: nikeOrange,
    quantity: 1,
  },
  { id: 8, name: "Puma Casuals White", price: 160, image: puma, quantity: 1 },
  {
    id: 9,
    name: "Puma Red Strips",
    price: 160,
    image: pumaRedStrips,
    quantity: 1,
  },
  { id: 10, name: "Fila White", price: 360, image: FilaWhite, quantity: 1 },
  {
    id: 11,
    name: "Nike Gray Runner",
    price: 120,
    image: NikeRunner,
    quantity: 1,
  },
  {
    id: 12,
    name: "Balenciaga Off Gray",
    price: 480,
    image: BalenciagaGray,
    quantity: 1,
  },
];

function App() {
  const [carts, setCarts] = useState([]);
  const [ordered, setOrdered] = useState(false);
  const [isOpen, setIsOpen] = useState(false)



  function deleteFromCart(id) {
    setCarts((items) => items.filter((cart) => cart.id !== id));
  }

  function addToCart(id) {
    const newItem = products.filter((product) => product.id === id);
    const existed = carts.some((cart) => cart.id === id);
    if (!existed) setCarts((carts) => [...carts, ...newItem]);

  }
  function orderedFun(){
    setIsOpen(false)
    setOrdered(true)
    setCarts([])
    setTimeout(()=>{
      setOrdered(false)
    },5000)
  }
  console.log(isOpen)

  return (
    <>
        <Navbar carts={carts} setIsOpen={setIsOpen}/>
        <div className="m-auto  md:px-10 pt-3 pb-16 flex w-full h-screen gap-5 relative ">
        <div className={` ${!isOpen ? "w-full" : "w-4/6"} flex justify-center items-center`}>
          <div className={`absolute transition ease-in-out  ${!ordered ? "invisible -z-10 scale-50" :"visible z-10 scale-100"} py-20 md:px-32 px-3 flex items-center gap-2 bg-pink-900  rounded-lg`} >
            <span className="md:text-3xl text-2xl text-green-500"><BsPatchCheckFill /> </span>
            <p className="text-white text-2xl">Your order is Complete!</p>
          </div>
          <ShoppingList products={products} addToCart={addToCart} ordered={ordered} />
        </div>
        
       {!isOpen ? "" : (  <div className={`w-2/6 transition `}>
            <Cart 
              carts={carts} 
              deleteFromCart={deleteFromCart} 
              setCarts={setCarts} 
              orderedFun={orderedFun}
              isOpen={isOpen}
            />
        </div>)}
      </div>
    </>
  );
}

export default App;
