import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cardinfo:"",
    securitycode:"",
    expmonth:"",
    expyear:""
}

const paymentSlice=createSlice({
    name:"payment",
    initialState,
    reducers:{
        setPaymentDetails:(state,action)=>{
            state.cardinfo=action.payload.cardinfo;
            state.securitycode=action.payload.securitycode;
            state.expmonth=action.payload.expmonth;
            state.expyear=action.payload.expyear;
        }
    }
})

export const {setPaymentDetails}=paymentSlice.actions;
export default paymentSlice.reducer;