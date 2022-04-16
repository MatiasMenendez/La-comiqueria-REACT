import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { db } from "../firebase/config"
import { collection, addDoc, Timestamp, updateDoc, getDoc, doc } from "firebase/firestore"
import { Navigate, Link } from "react-router-dom"

const Checkout = () => {

    const {cart, cartTotal, emptyCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState ({
        nombre: '',
        email:'',
        tel:''
    })

    const handleInputsChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            item: cart,
            total: cartTotal(),
            comprador: {...values},
            fyh: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(db, 'orders')

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
             .then((doc) => {
                 if (doc.data().stock >= item.contador){
                    updateDoc(docRef, {
                        stock: doc.data().stock - item.contador
                    })
                 } else {
                     alert('No hay stock de este item')
                 }
                 
             })
        })

        addDoc(ordersRef, orden)
         .then((doc) => {
             setOrderId(doc.id)
             emptyCart()
         })
    
    }

    if(orderId) {
        return <div className="container my-5" key={orderId.id}>
            <h2>Tu orden se registro exitosamente!</h2>
            <hr/>
            <h4>Orden numero: {orderId}</h4>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return(
        <div className="container my-5 checkout">
          <h2>Checkout</h2>
          <hr/>

          <form onSubmit={handleSubmit}>
              <input
              className="form-control my-2"
              type={'text'}
              placeholder="Ingresar nombre"
              value={values.nombre}
              name='nombre'
              onChange={handleInputsChange}
              />
              <input
              className="form-control my-2"
              type={'email'}
              placeholder="ingresar email"
              value={values.email}
              name='email'
              onChange={handleInputsChange}
              />
              <input
              className="form-control my-2"
              type={'tel'}
              placeholder="ingresar telefono"
              value={values.tel}
              name='tel'
              onChange={handleInputsChange}
              />
              <button className="btn btn-primary" type="submit">Enviar</button>
          </form>
        </div>
    )
}

export default Checkout