import './NavBar.css'
import { useContext } from 'react'
import NavBarImg from './NavBarImg/AikidoStoreLogo.png'
import CartWindget from '../CartWindget/CartWindget'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const NavBar = () => {

    const { setCount } = useContext(CartContext)

    const count = setCount()

    return (
        <header className='Header'>
            <nav className='Nav'>
                <Link to={'/'}>
                <img className='LogoAikido' src={NavBarImg} alt='Logo' />
                </Link>
                <div className='Flexcontein'>
                    <NavLink to='/category/Indumentaria' className={({isActive}) => isActive ? 'ActiveOption' : 'Category'}>Indumentaria</NavLink>
                    <NavLink to='/category/Armas' className={({isActive}) => isActive ? 'ActiveOption' : 'Category'}>Armas</NavLink>
                    <NavLink to='/category/Sale' className={({isActive}) => isActive ? 'ActiveOption' : 'Category'}>Sale</NavLink>
                </div>

                {count > 0 && <CartWindget />}

            
            </nav>

        </header>
    )
}

export default NavBar