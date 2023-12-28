import { createSlice } from "@reduxjs/toolkit";




export const authSlice=createSlice({
    name:'auth',
    initialState:{
    user:JSON.parse(localStorage.getItem('authUser'))|| {
        name:"",
        password:"",
        authUser:false,
    }
    
    },
    reducers:{
    login(state,action){
    const userId=action.payload;
    const userValidation=/^[A-Za-z]{4,10}$/i.test(userId.name)
    const passwordValidation=/^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(userId.password)
    state.user=userId
    if (!userValidation || !passwordValidation){
    state.user.authUser=false}
    else{
    state.user.authUser=true
    const saveState=JSON.stringify(userId)
    localStorage.setItem('authUser',saveState)
    
}
    
    },
    logout(state){
   state.user={
    name:'',
    password:'',
    authUser:false
   };
   localStorage.clear();
    }
        
} 
   
    
})
export const {login,logout} =authSlice.actions;
export default authSlice.reducer;