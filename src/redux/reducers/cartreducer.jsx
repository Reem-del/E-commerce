import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{Items:[],
        totalSum:0},
    reducers:{
        addItem(state,action){
            const productId=action.payload;
            const exist=state.Items.find((product)=>product.id === productId.id && product.title === productId.title && product.price === productId.price)
            console.log(exist)
            if (exist){
                exist.quantity ++;
                exist.totalamount ++;
                exist.totalprice +=exist.price;
            }
            else {
            state.Items.push({
            id:productId.id,
            title:productId.title,
            price:productId.price,
            totalamount:1,
            image:productId.image,
            quantity:1,
            totalprice:productId.price,
          
            })}
             
        },
       
        
          removeItem(state,action){
            const productId=action.payload;
            state.Items=state.Items.filter((product)=>product.id !== productId.id && product.title !== productId.title && product.price !== productId.price)
          
               
           
        

           
        },
        increseQuantity(state,action){
          const productId=action.payload;
            const res=state.Items.find((product)=>product.id === productId.id && product.title === productId.title && product.price === productId.price)
            res.quantity ++;
            res.totalprice +=res.price;
           
        },
        decreseQuantity(state,action){
            const productId=action.payload;
              const res=state.Items.find((product)=>product.id === productId.id && product.title && productId.title && product.price && productId.price)
              if (res.quantity  !==1){
                res.quantity --;
                res.totalprice -=res.price;}
                else {state.Items=state.Items.filter(item=> item !== res)}
              },
              
             
          

        clearItems(state){
            return {...state,Items:[]}
        },
        billingCount(state){
    state.totalSum=state.Items.map((item)=>item.totalprice).reduce((acc,curr)=>acc + curr,0)
       
       

    }
}})
export const {addItem,removeItem,increseQuantity,decreseQuantity,clearItems,billingCount} = cartSlice.actions;
export default cartSlice.reducer