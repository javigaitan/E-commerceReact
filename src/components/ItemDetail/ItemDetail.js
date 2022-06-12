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
        <article className="">
            <header className="">
                <h2 className="">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className=""/>
            </picture>
            <section>
                <p className="">
                    Categoria: {category}
                </p>
                <p className="">
                    Descripción: {description}
                </p>
                <p className="">
                    Precio: {price}
                </p>
            </section>           
            <footer className=''>
                { count > 0  
                    ? <Link to='/Cart' className=''>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.count}/>}               
            </footer>
        </article>
    )
}

export default ItemDetail