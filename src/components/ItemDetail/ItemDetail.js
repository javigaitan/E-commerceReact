import './ItemDetail.css'
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
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { count > 0  
                    ? <Link to='/cart' className='Option'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.count}/>}               
            </footer>
        </article>
    )
}
export default ItemDetail