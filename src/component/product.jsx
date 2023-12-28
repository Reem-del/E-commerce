import '../App.css'
import { useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { addItem} from '../redux/reducers/cartreducer'
import { BsCartFill} from "react-icons/bs";


const Product = ({prop}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

 

 const handleAdd=()=>{
    dispatch(addItem(prop))


} 
  
    return (
      <div className='relative flex flex-col  w-60 h-60 m-3 border rounded-sm shadow-lg shadow-slate-400 p-4 hover:outline outline-slate-400' >
        <BsCartFill size={17} className='text-red-400 absolute right-3 top-2' onClick={handleAdd} />
<img src={prop.image} alt='img' className='w-28 h-36 py-3' onClick={()=>navigate(`/productsdetail/${prop.id}`)} />
<p  className='font-bold text-slate-700 truncate pb-3'>{prop.title}</p>
<p className="text-lg text-slate-400 hover:text-red-400 font-bold" >{prop.price} $</p>
</div>
          
 
    )
}

export default Product
/*

*/

