import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailBody'>


        <div className='shop-card' >
            <ItemDetail  {...product} />
        </div>

        </div>
    )
}

export default ItemDetailContainer