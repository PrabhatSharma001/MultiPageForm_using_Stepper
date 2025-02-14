import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cardinfo:"",
    cardholdername:"",
    cvv:"",
    expmonth:"",
   
}

const paymentSlice=createSlice({
    name:"payment",
    initialState,
    reducers:{
        setPaymentDetails:(state,action)=>{
            state.cardinfo=action.payload.cardinfo;
            state.cardholdername=action.payload.cardholdername;
            state.cvv=action.payload.cvv;
            state.expmonth=action.payload.expmonth;
          
        }
    }
})

export const {setPaymentDetails}=paymentSlice.actions;
export default paymentSlice.reducer;