import './Item.css'

const Item = ({id, name, price, handlePage, img}) => {
    return (
      <div className='CardContein'>
        <div className="CardItem">
            <img scr={img}/>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <button onClick={() => handlePage({ path: 'detail', param: id})}>Ver detalle</button>
        </div>
        </div>
    )
}

export default Item