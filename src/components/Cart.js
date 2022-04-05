import { useContext } from "react"
import { CartContext } from "./CartContext"
import { BsFillTrashFill } from 'react-icons/bs'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)


   return(
    <div className="container my-5">
      <h2> Tu compra</h2>

      {
        cart.map((item) => (
          <div key={item.id}>
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.contador}</p>
          <h5> Precio: ${item.precio * item.contador}</h5>
          <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
            <BsFillTrashFill/></button> 
          <hr/>
           </div>
        ))
      }
       <h3>Total: ${cartTotal()}</h3>
       <hr/>
       <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
    </div>
   )
}

export default Cart