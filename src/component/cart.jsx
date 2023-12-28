
import { useDispatch, useSelector } from 'react-redux'
import {removeItem, increseQuantity,decreseQuantity,billingCount} from '../redux/reducers/cartreducer';
import '../App.css'
import '../animate.css'
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { GrLinkPrevious} from 'react-icons/gr';
import { MdClose } from "react-icons/md";
import { PiPaypalLogoBold } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import DateExp from './dateexp';





export default function Cart() {
    const cartproducts=useSelector(state=>state.cart.Items)
    const totalSum=useSelector(state=>state.cart.totalSum)
    const dispatch=useDispatch();
    const itemCount=cartproducts.length

    function cutWord(word){
      const result=word.split(' ').slice(0,4).join(' ')
      return result;
    }
  
   
useEffect(()=>{dispatch(billingCount(cartproducts))},[cartproducts])

     
         return (
        <div >
         <img src='/productimage/login.jpg'  alt='cart' className='relative w-full h-screen' />
          <div className='flex w-full absolute top-10 left-0 '>
            <div className='w-3/4 mt-3 text-yellow-50 '>
          <h3 className='m-3 text-xl font-bold text-red-400 font-serief'>Shopping Card</h3>
          <p className={`text-lg ml-4 text-yellow-50 ${itemCount !== 0 && `hidden`}`}>No items exist...card is Empty</p>
          <table className={`table w-full mb-4 text-yellow-50 ${!itemCount && `hidden`}`}>
            <thead>
                <tr >
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {cartproducts.map((c)=>
            <tr className='border border-white'>
<td><img src={c.image}  alt='img' className='photo m-2 w-14 rounded-full' /></td>
<td>{cutWord(c.title)}</td>
<td><div className='flex flex-row gap-2'>
<button className='text-red-300 font-bold ' onClick={()=>dispatch(increseQuantity(c))}>+</button>{c.quantity}<button  className='text-red-300 text-lg font-bold '
onClick={()=>dispatch(decreseQuantity(c))}>-</button> 
</div></td>
<td>{c.totalprice.toFixed(2)} $</td>
<td><button  onClick={()=>{dispatch(removeItem(c))}}><span  className='text-red-300 text-xl font-bold '>&times;</span></button></td>
</tr>)}
            </tbody>
    
  </table>
    <div className={`flex ${itemCount ? `flex-col justify-center items-center gap-3` : `flex-row justify-start m-4`}`}>
   <p className={`text-xl text-center mt-4' ${!itemCount && `hidden`} hover:text-red-400`}> billing is : <span>{totalSum.toFixed(3)}</span></p>
   <button className='btn bg-[#d6d3d1]' onClick={()=>document.getElementById('my_modal_1').showModal()}>Show Card</button>
   <dialog id="my_modal_1"  className='bg-[#57534e] rounded-lg'>
   <form method="dialog">
        <button className="text-center w-6 h-6 hover:bg-gray-500"><MdClose /></button>
      </form>
  <div className=' w-[300px] h-[500px] pt-2 font-mono '>
    <h3 className="font-bold font-serief text-xl text-center">Payment Info</h3><hr />
    <p className='p-3 text-md font-bold font-mono'>Payment Method</p>
    <div className='flex flex-row justify-evenly p-3'>
      <button className='btn px-2 bg-[#d6d3d1] '><PiPaypalLogoBold size={20} />PayPal</button>
      <button className='btn  bg-[#d6d3d1]'><CiCreditCard1  size={20}/>credit card</button>
      </div><hr />
      <div className='flex flex-col gap-3 p-3'>
      <label className='font-bold text-sm '>Name On Card</label>
      <input type='text'  className='bg-transparent border-b pl-2 ' placeholder='Name...' />
      </div>
      <div className='flex flex-col gap-3 p-3'>
      <label className='font-bold text-sm'>Card Number</label>
      <input type='password' className='bg-transparent border-b pl-2'  placeholder='Password...' />
      </div>
      <div className='flex flex-col gap-3 p-3'>
      <label className='font-bold text-sm'>Explanation Date</label>
    <DateExp />
      </div>
      <button className='btn btn-wide  bg-[#d6d3d1] ml-5 mt-5'>CheckOut</button>




      
   
  </div>
</dialog>
   </div>
   </div>
        
   </div>
   <div className='flex flex-row gap-4  text-blue-900 absolute bottom-3 left-16 hover:bg-red-400'>
   <GrLinkPrevious  className='mt-1'/>
           <Link to='/Home'>Back To Shopping</Link>
           
            </div>
      </div>
    )
}
