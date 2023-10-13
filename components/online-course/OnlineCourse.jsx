import React ,{useState} from 'react'
import Refineheader from './Refineheader'
import FliterResult from './FliterResult'
import { CartProvider } from './CartContext';
export default function OnlineCourse() {
  const [filteredData, setFilteredData] = useState([]);
  const TableState = (data) => {
    setFilteredData(data)
  }

  return (
   <CartProvider>
     <div className='online-course container'>
      <div className="row">
      <Refineheader TableState ={TableState}/>
      <FliterResult state ={filteredData}  />
      </div>
    </div>
   </CartProvider>
  )
}
