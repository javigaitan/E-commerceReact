
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, count, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className=''>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    Cantidad: {count}
                </p>
                <p>
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer>
                 <p>
                     Subtotal: ${price * count}
                 </p>
                 <button className='btn' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem