import { useEffect, useState } from "react"
import './ItemDetail.css'
import { getItem } from '../../asyncmock'

const ItemDetail = () => {
    const [products, setProducts] = useState([])

     useEffect(() => {

        getItem().then(response => {
            setProducts(response)

         fetch('https://api.mercadolibre.com/sites/MLA/search?q=aikidolibros')
             .then(response => {
                 return response.json()
             }).then(json => {
                 setProducts(json.results.slice(0,1))
            })
        })
     }, [])
    
    console.log(products)

    return (
        <div>
            <h1>Libros de Aikido</h1>
            
            <ul className="CardConteinDetail">
                {products.map(p => {
                    return (
                        <li className="CardItemDetail" key={p.id}>
                            <img src={p.thumbnail} alt={p.title}/>
                            <p>{p.title}</p>
                            <p>${p.price}</p>
                            <p>{p.itemdetail}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ItemDetail