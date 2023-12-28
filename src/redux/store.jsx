import { configureStore } from "@reduxjs/toolkit";
import CartReducer  from './reducers/cartreducer';
import UserReducer from './reducers/userreducer';


const store=configureStore({reducer:{
cart:CartReducer,
auth:UserReducer,
},
})
export default store;