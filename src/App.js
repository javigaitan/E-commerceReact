import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';


function App() {



  return (
    <CartContextProvider>
      <NotificationProvider>

    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Navega en nuestro catalogo completo'/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
      <Route path='/Cart' element={<Cart />}/>

    </Routes>
    </BrowserRouter>
    </NotificationProvider>
    </CartContextProvider>

  );
}

export default App;
