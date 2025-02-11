import { createSlice } from "@reduxjs/toolkit";

const initialState={
    village:"",
    state:"",
    city:"",
    nationality:""
}

const addressSlice=createSlice({
    name:"address",
    initialState,
    reducers:{
        setAddressDetails:(state,action)=>{
           state.village=action.payload.village;
           state.state=action.payload.state;
           state.city=action.payload.city;
           state.nationality=action.payload.nationality;

        }
    }
    
})

export const{setAddressDetails} =addressSlice.actions;
export default addressSlice.reducer;