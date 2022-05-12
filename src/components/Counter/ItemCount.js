import { useState, useEffect } from 'react'
import './ItemCount.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)


    useEffect(() => {

        stock == count ? console.log('Se llego al limite de STOCK') : console.log('Segui comprando')
    })


    const decrement = () => {

        initial >= count ? setCount(count + 0) : setCount(count - 1)
        
    }

    const increment = () => {

        stock == count ? setCount(count + 0) : setCount(count + 1)
        
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