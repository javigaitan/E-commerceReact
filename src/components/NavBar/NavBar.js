import './NavBar.css'
import NavBarImg from './NavBarImg/AikidoStoreLogo.png'
import CartWindget from '../CartWindget/CartWindget'




const NavBar = () => {
    return (
        <header className='Header'>
            <nav>
                <img className='LogoAikido' src={NavBarImg} alt='Logo' />
                <ul className='Flexcontein'>
                    <li class=""><a href="">Indumentaria</a></li>
                    <li class=""><a href="">Armas</a></li>
                    <li class=""><a href="">Sale!</a></li>
                </ul>

                <div className='CartWindget'>
                <CartWindget carrito={'50'} />
                </div>

            
            </nav>

        </header>
    )
}

export default NavBar