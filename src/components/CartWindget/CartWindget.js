import './CartWindget.css'
import { Link } from 'react-router-dom';

const CartWindget = () => {
    
    return(
        
        <Link to='/Cart' className="CartWidget">
            <img src="/images/carrito.svg" alt='cart-widget' className='CartImg'/>
            
        </Link>
        

    );
}

export default CartWindget