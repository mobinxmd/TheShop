import ProductCard from './ProductCard.jsx';

function ShoppingList({products, addToCart, ordered}) {
  return (
   <div className={`grid grid-cols-2 sm:grid-cols-3 p-3 gap-3 md:grid-cols-4 ${ordered ? "blur" : ""} bg-slate-200 h-full md:p-6 md:gap-5 place-content-baseline rounded-lg overflow-x-hidden overflow-y-auto`}>
    {products.map(product => <ProductCard product={product} addToCart={addToCart} key={product.id} />)}
   </div>
  )
}

export default ShoppingList
