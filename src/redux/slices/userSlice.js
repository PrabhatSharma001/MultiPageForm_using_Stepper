import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    mobile:"",
    email:"",
    password:"",
    confirmpassword:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            
      state.name = action.payload.name;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmpassword = action.payload.confirmpassword;
        
    }
    }
})

export const {setUserDetails} =userSlice.actions;
export default userSlice.reducer;