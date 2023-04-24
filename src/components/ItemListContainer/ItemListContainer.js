import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

       
    }, [categoryId])


    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className='ItemListContainer'>

            <div className='carousel-box'> <Carousel/></div>

            

            <div className='boxtitle'> 
             <h2>{ greeting }</h2> 
            </div>


              <div className='boxproducts'>
                { 
                   products.length > 0 ? <ItemList products={products} /> : <h2>No hay productos</h2>
                }
              </div>

              <Footer/>
        </div>

        
    )
}

export default ItemListContainer