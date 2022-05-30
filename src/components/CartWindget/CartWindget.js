import './CartWindget.css'

const CartWindget = () => {
    
    return(
        
        <button to='/cart' className="CartWidget">
            <img src="/images/carrito.svg" alt='cart-widget' className='CartImg'/>
            0
        </button>
        

    );
}

export default CartWindget