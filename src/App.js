import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react'
import Counter from './components/Counter/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (

    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Todo para Aikido'/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
      <Route/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
