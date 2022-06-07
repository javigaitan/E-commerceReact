import './NavBar.css'
import NavBarImg from './NavBarImg/AikidoStoreLogo.png'
import CartWindget from '../CartWindget/CartWindget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
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

                <div className='CartWindget'>
                <CartWindget />
                </div>

            
            </nav>

        </header>
    )
}

export default NavBar