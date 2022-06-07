import './ItemDetail.css'


const ItemDetail = ({  name, price, description }) => {
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
          <button class="btn">Comprar</button>
          
        </div>
      </div>
      </div>
        
    )
}

export default ItemDetail