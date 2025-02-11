import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import addressReducer from './slices/addressSlice';
import paymentReducer from './slices/paymentSlice';
import {persistStore,persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage"; 


const persistConfig={
    key:"root",
    storage,
}

const persistedUserReducer=persistReducer(persistConfig,userReducer)
const persistedAddressReducer=persistReducer(persistConfig,addressReducer);
const persistedPaymentReducer=persistReducer(persistConfig,paymentReducer);

const store=configureStore({
    reducer:{
        user:persistedUserReducer,
        address:persistedAddressReducer,
        payment:persistedPaymentReducer
    }
})

const persistor=persistStore(store);


export  {store,persistor};