import '../App.css'
import { BsFillPersonFill} from "react-icons/bs";
import { MdOutlineSecurity} from "react-icons/md";
import { useDispatch , useSelector } from 'react-redux';
import { login  } from '../redux/reducers/userreducer';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(state=>state.auth.user)
    const {authUser}=user;
    const[userInfo,setUserInfo]=useState({uname:'',password:''})
    function handleSubmit(){
        dispatch(login(userInfo))
        navigate('/Home')
        console.log(authUser)
        setUserInfo({uname:'',password:''})}



    return (
    <div >
        <img src="/productimage/login.jpg" alt='login' className='relative h-screen w-full ' />
       <div className="absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backrop-brightness-200 text-slate-50 ">
        <form  onSubmit={handleSubmit} className=" flex flex-col space-y-3 w-80 h-72 border-2 border-slate-600 rounded-sm p-3  shadow-lg backdrop-brightness-125">
        <h3 className="font-mono text-center text-lg ">CUSTOMER LOGIN</h3><hr />
        <div className='flex flex-row space-x-2'>
        <BsFillPersonFill size={25} className='mt-2'  />
       <input 
       value={userInfo.uname} 
       onChange={(e)=>setUserInfo({...userInfo,uname:e.target.value})}
       className='relative p-2 bg-transparent ' 
       type='text'
        placeholder="User Name"  />
       </div><hr />
       <div className='flex flex-row space-x-2'>
        < MdOutlineSecurity size={25} className='mt-2'  />
       <input
         value={userInfo.password} 
         onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} 
        className='p-2 bg-transparent'
        type='password'
         placeholder="Password"  />
       </div><hr />
       <button className='p-2 mt-4 hover:border border-white-200 '>LOGIN</button>
       </form>

       </div>
        </div> 

     
   
  
      
    )
}
export default Login;
    /* <input  className='relative p-2 bg-transparent' type='text' placeholder="&#xf505;User Name" data-icon='&#xf505;' /><hr />*/     