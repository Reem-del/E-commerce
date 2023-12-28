import { useState,useEffect,useCallback } from 'react';
import Product from './product';



 function ShowProduct() {
  const[data,setData]=useState([]);
  const[value,setValue]=useState('all');
  const[filter,setFilter]=useState([]);
  
 async function getDta(){
  const res=await fetch('https://fakestoreapi.com/products?limit=90');
  setData( await res.clone().json());
  setFilter(await res.json());
  }
  useEffect(()=>{getDta()},[])
 
  const filtra=useCallback((value)=>{
    setValue(value)
  const res=data.filter(d=>d.category === value)
  setFilter(res)
  },[data])
  
    
console.log(value)
    return (
      <div className='relative'>
        <div className="max-md:dropdown dropdown-bottom md:hidden">
  <label tabIndex={0} className="btn bg-slate-400 m-1 font-mono text-sm">Categories</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <li><button  className='px-3 py-2 bg-slate-400 rounded-md hover:outline outline-slate-100 border-b-2' onClick={()=>setFilter(data)}>all</button></li>
    <li><button className='px-3 bg-slate-400  rounded-md border-b-2'   onClick={()=>{filtra("men's clothing")}}>men's clothing</button></li>
    <li><button className='px-3 bg-slate-400  rounded-md border-b-2 ' onClick={()=>{filtra("jewelery")}}>jewelery</button></li>
    <li><button className='px-3 bg-slate-400  rounded-md  border-b-2' onClick={()=>{filtra("electronics")}}>electronics</button></li>
    <li><button  className='px-3 bg-slate-400  rounded-md border-b-2 '  onClick={()=>{filtra("women's clothing")}}>women's clothing</button></li>
  </ul>
</div>
       
         <div className='md:flex justify-center space-x-3 pt-2 max-md:hidden'>
         <button  className='px-3 py-2 bg-slate-400 rounded-md hover:outline outline-slate-100' onClick={()=>setFilter(data)}>all</button>
          <button className='px-3 bg-slate-400  rounded-md '   onClick={()=>{filtra("men's clothing")}}>men's clothing</button>
          <button className='px-3 bg-slate-400  rounded-md  ' onClick={()=>{filtra("jewelery")}}>jewelery</button>
          <button className='px-3 bg-slate-400  rounded-md  ' onClick={()=>{filtra("electronics")}}>electronics</button>
          <button  className='px-3 bg-slate-400  rounded-md  '  onClick={()=>{filtra("women's clothing")}}>women's clothing</button>
     </div>
           <div className='flex flex-wrap gap-2 justify-between mt-3 max-md:justify-center items-center' >
            {filter && filter.map(d=>
            <Product  key={d.id} prop={d} />) }
            </div>
            
            </div>
      )
  }
  
  export default ShowProduct;
  
