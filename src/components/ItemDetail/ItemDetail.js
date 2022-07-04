
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ClassItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [count, setCount] = useState(0)

    const { setNotification } = useNotification()

    const { addItem, getProduct } = useContext(CartContext)


    const handleOnAdd = (count) => {
        setCount(count)
        setNotification('success', 'Se agrego correctamente al carrito')
        addItem({ id, name, price, count: Number(count) })
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                { count > 0  
                    ? <Link to='/cart' className='btn'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.count}/>}               
            </footer>
        </article>
    )
}
export default ItemDetail