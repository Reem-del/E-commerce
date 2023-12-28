import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product2 from './product2';
import { Link } from 'react-router-dom';
import '../App.css'
import '../animate.css'

export default function ProductsDetail() {
const [data,setData]=useState({})
const [collection,setCollection]=useState([]);;
   const {id}=useParams();
   async function getData(){
    const res=await fetch(`https://fakestoreapi.com/products/${id}`);
    const result=await res.json();
    setData(result);
   
    }
    async function getCollection(){
      const res=await fetch(`https://fakestoreapi.com/products`);
      const result=await res.json();
      setCollection(result);
      console.log(collection)
      }
      const productcollection=collection.filter(prod=>prod.category=== data.category)
      console.log(productcollection)

    useEffect(()=>{getData()},[id])
    useEffect(()=>{getCollection()},[])

  
            
    
    return (
        <div className='flex flex-col '>
          <div className='flex flex-row mt-10 h-56'>
            <div className='w-1/3 relative '>
              <img src={data.image}  className='absolute w-32  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] showing '/>
            </div>
          <div className='w-2/3 bg-[#e0b9bf] pl-4 border rounded-lg mx-3 text-slate-700 overflow-y-scroll appear'>
              <p className='px-4 py-3 logo text-xl bold'>{data.title}</p><hr />
              <p className='text-md  leading-relaxed mt-3'>{data.description}</p>
              <p className='mt-4 text-xl hover:text-red-400'>Price :{data.price} $</p>
            </div>
          </div>
          <div className='flex flex-row gap-2 overflow-x-scroll mt-10'>
            {productcollection.map(p=>
          <Product2 prop={p} handlclick={()=>setData(p)} selectedValue={`${data === p ? `outline outline-[#e0b9bf]` : `outline-none` }`} />)}
          </div>
         <Link className='text-slate-600 px-4  hover:underline font-bold' to='/home'>Back</Link>
  
        </div>
    )
}
