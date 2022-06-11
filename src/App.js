import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react'
import Cart from './components/Cart/Cart';
import Counter from './components/Counter/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';

function App() {

  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <CartContextProvider>
      <NotificationProvider>

    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Todo para Aikido'/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
      <Route path='/cart' element={<Cart />}/>

    </Routes>
    </BrowserRouter>
    </NotificationProvider>
    </CartContextProvider>

  );
}

export default App;
