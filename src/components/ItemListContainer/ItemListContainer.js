import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
   
    console.log('antes de montar')

    return(
        <div className='ItemListContainer'>
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer