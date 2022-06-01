import { useState, useEffect } from 'react'
import './ItemCount.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial ? initial : 1)


    useEffect(() => {

        stock == count ? console.log('Se llego al limite de STOCK') : console.log('Segui comprando')
    })


    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
        
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        
    }


    return(
        <div className ='Contador' >

            <button className='BtnContador' onClick={decrement}>-</button> 
            <p className='Contado'>{count}</p>
            <button  className='BtnContador'onClick={increment}>+</button>
            <button className='BtnAgregar' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter