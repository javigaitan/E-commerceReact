import './Cart.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { cart, clearCart, getTotal, getCount } = useContext(CartContext)  

    if(getCount() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button className="Button">Generar Orden</button>

        </div>
    )
}

export default Cart