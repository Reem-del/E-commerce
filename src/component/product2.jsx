import React from 'react'
import { addItem } from '../redux/reducers/cartreducer'
import { BsCartFill} from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Product2({prop,handlclick,selectedValue}) {
    const dispatch=useDispatch()
    const handleAdd=()=>{
        dispatch(addItem(prop))}
    return (
    
            <div className={`flex flex-col w-60 h-60 m-4  shadow-lg shadow-red-950 p-4  ${selectedValue} `} onMouseOver={handlclick} >
      <img src={prop.image} alt='img' className='w-24 h-24 mb-2' />
      <p  className='font-bold text-slate-700 truncate pb-3'>{prop.title}</p>
      <div className='flex flex-row justify-between '>
      <p className="text-lg font-bold hover:text-red-500">{prop.price} $</p>
      <Link className='mt-2' onClick={handleAdd}><BsCartFill className='w-6 h-4 text-red-300'/></Link>
      </div>
      </div>
        
    )
}

export default Product2
