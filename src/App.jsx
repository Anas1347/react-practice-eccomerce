
import { useState } from 'react'
import AllProducts from './AllProducts/AllProducts'
import './App.css'
import CartContainer from './CartContainer/CartContainer'
import Navbar from './Navber/Navbar'

function App() {

const [isActive, setIsActive] = useState({
  cart : true,
  status :'cart'
})

const [selected, setSelected] = useState([]);

const addSelectedProduct = (product) =>{
const newProduct = [...selected, product]
setSelected(newProduct);
}

console.log(selected);


const handleIsActiveStates = (status) =>{
  if(status === 'cart'){
    setIsActive({
      cart : true,
      status : 'cart'
    }
  )
    
  }
  else{
    setIsActive({
      cart : false,
      status : 'about'
    }
  )
    
  }
}



  return (
    <>
  <Navbar></Navbar>
  <div className='container mx-auto flex justify-between'>
  <AllProducts addSelectedProduct={addSelectedProduct}></AllProducts>
  <CartContainer isActive={isActive}
   handleIsActiveStates={handleIsActiveStates}></CartContainer>
  </div>
    </>
  )
}

export default App
