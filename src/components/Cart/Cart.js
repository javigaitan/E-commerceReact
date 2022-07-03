import './Cart.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db, collectionsName } from '../../service/firebase'
import { useNotification } from '../../notification/Notification'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, setCount } = useContext(CartContext)  

    const { setNotification } = useNotification()

    const [dataForm, setDataForm] = useState({
        name: "", phone: "", email: "",
        items: cart,
        total: getTotal()
    }
    
    )

    const handlerChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = () => {
        console.log('crear orden')
        setLoading(true)

        

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodCount = cart.find(prod => prod.id === doc.id)?.count

                    if(dataDoc.stock >= prodCount) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodCount})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, dataForm)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                setNotification('success',`El id de la orden es: ${id}`)
            }).catch(error => {
                console.log(error)
                setNotification('error',`Algunos productos no tienen stock`)
            }).finally(() => {
                setLoading(false)
            })
    }
    
    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if(setCount() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (   
          
        <div>
            <h1>Carrito de Compras</h1>

            <div className='containerCard'>

            <form className="formContent" onSubmit={createOrder}>
                <input type="text" name="name" placeholder="Nombre"  onChange={handlerChange} value={dataForm.name} required /> <br />
                <input type="text" name="phone" placeholder="Telefono"  onChange={handlerChange} value={dataForm.phone} required /><br />
                <input type="email" name="email" placeholder="Ingrese su correo electronico"  onChange={handlerChange} value={dataForm.email} required /><br />

             <div className='shopCardBuy'>{ cart.map(p => <CartItem key={p.id} {...p}/>) }</div>
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="btn">Limpiar carrito</button>
            <button className="btn" onClick={createOrder}>Generar Orden</button>
            </form>

            </div>

        
        </div>
    )
}

export default Cart