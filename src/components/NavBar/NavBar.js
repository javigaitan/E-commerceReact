import './NavBar.css'
import NavBarImg from './NavBarImg/AikidoStoreLogo.png'
import CartWindget from '../CartWindget/CartWindget'

const NavBar = () => {
    return (
        <header className='Header'>
            <nav>
                <img className='LogoAikido' src={NavBarImg} alt='Logo' />
                <ul className='Flexcontein'>
                    <li className="Option"><a href="">Indumentaria</a></li>
                    <li className="Option"><a href="">Armas</a></li>
                    <li className="Option"><a href="">Sale!</a></li>
                </ul>

                <div className='CartWindget'>
                <CartWindget />
                </div>

            
            </nav>

        </header>
    )
}

export default NavBar