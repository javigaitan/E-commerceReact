import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ClassItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'
import Cart from '../Cart/Cart'


const ItemDetail = ({  name, price, description, stock, id,  }) => {

  const [count, setCount] = useState(0)

  const { setNotification } = useNotification()

  const { addItem, getProduct } = useContext(CartContext)

  const handleOnAdd = (count) => {
    setCount(count)
    setNotification('success', 'Se agrego correctamente al carrito')
    addItem({ id, name, price, count: Number(count) })

  }

    return(
        <div class='conteinerCard'>
        <div class="shop-card">
        <div class="title">
        <h1>{name}</h1>
        </div>
        <div class="desc">
          <p>{description}</p>
        </div>
      
        <div class="cta">
          <div class="price">${price}</div>
          <div>
            { count > 0  
                    ? <Link to='/Cart' className='BtnContador'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.count}/>
                    
          } 
          </div>


        </div>
      </div>
      </div>
        
    )
}

export default ItemDetail