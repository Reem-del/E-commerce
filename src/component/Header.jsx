import '../App.css';
import {Link, useNavigate} from 'react-router-dom'
import { BsCartFill,BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userreducer';
import { AiOutlineMenuFold } from "react-icons/ai";
const Header = () => {
  const navigate=useNavigate();
  
  const user=useSelector(state=>state.auth.user);
  const cartproducts=useSelector(state=>state.cart.Items)
  

  const dispatch=useDispatch();
  
function  handleLogOut(){
  dispatch(logout(user))
  navigate('./login')
  
 }
 
  
  
    return (
      <div className='flex flex-row justify-between font-bold h-10 bg-slate-400 text-zinc-300 '>
         
      <img src='../productimage/logo-removebg-preview.png' className='-mt-12 -ml-2 w-32 h-36' />
        <div className="dropdown dropdown-end ">
           <AiOutlineMenuFold size={20} tabIndex={0} className='md:hidden max-md:mr-3 mt-3' /> 
           <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-49">
    <li> <div className='relative'>
                  <p className={`absolute -top-2 right-1 max-md:right-5  text-red-600 ${cartproducts?.length ===0 &&  `hidden `}`}>{cartproducts.length}</p>
                <Link to="/cart" ><BsCartFill  size={17}/></Link>
                </div></li>
    <li> <Link   className='pr-3'><BsFillPersonFill  size={17} onClick={handleLogOut} /></Link></li>
  </ul>
</div>
        
          <div className='md:flex flex-row pt-4 space-x-3 max-md:hidden'>
                <div className='relative'>
                  <p className={`absolute -top-3 right-1 text-red-600 ${cartproducts?.length ===0 &&  `hidden `}`}>{cartproducts.length}</p>
                <Link to="/cart" ><BsCartFill  size={17}/></Link>
                </div>
                 <Link   className='pr-3'><BsFillPersonFill  size={17} onClick={handleLogOut} /></Link>
          </div>
   
        
       
        
       
       
       
  
  </div>
  

     
    
    )
}

export default Header