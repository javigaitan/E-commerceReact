import { useState, useEffect } from 'react'


const Counter = ({initial = 1, stock = 0, onAdd}) => {
    const [count, setCount] = useState(initial)


    useEffect(() => {

        stock == count ? console.log('Se llego al limite de STOCK') : console.log('Segui comprando')
    })


    const decrement = () => {
        if (count > 1) {
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
            
            <div>
            <button className='BtnAgregar' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default Counter