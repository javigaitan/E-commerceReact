import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react'
import Counter from './components/Counter/ItemCount';
import ItemDetail from './components/ItemDetailContainer/ItemDetail'

function App() {

  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="">

      <NavBar />
      <ItemDetail />
      <ItemListContainer greeting={'Aquí estaran mis productos'} />
      <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
        { show ? <Counter initial={1} stock={10} onAdd={handleOnAdd}/> : null }
        

    </div>
  );
}

export default App;
