import { useState, useEffect } from 'react'
import './ItemCount.css'


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);

    useEffect(() => {

        stock === count ? console.log('Se llego al limite de STOCK') : console.log('Segui comprando')
    })

    const add = () => {
        count !== stock && setCount(count + 1);
    }
    const substract = () => {
        count !== 0 && setCount(count - 1)

        
    }

    useEffect(() => {

        count === 0 ? console.log('No podes comprar 0 productos') : console.log('Podes sumas mas productos')
    })

    return (
        <div className='containerCount'>
            <h3>{count}</h3>
            <div>
                <button  className='btn' onClick={add}>+</button>
                <button className='btn' onClick={substract}>-</button>
                <button className='btn' disabled={count === 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
};


export default ItemCount