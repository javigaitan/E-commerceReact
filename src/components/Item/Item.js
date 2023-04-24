import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, description}) => {
    return (
        <div class='conteinerCard'>
        <div class="shop-card">
        <div class="title">
        <h3>{name}</h3>
        </div>
        <div class="desc">
          <p>{description}</p>
        </div>
      
        <div class="cta">
          <div class="price">${price}</div>
          
          <Link className='btnDetail' to={`/detail/${id}`}>Ver detalle</Link>
        </div>
      </div>
      </div>
      

    )
}

export default Item