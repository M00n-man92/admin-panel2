import { createSlice } from '@reduxjs/toolkit'
const productSlice = createSlice(
    {
        name: "product",
        initialState: {
           isFetching: false,
            products: [],
            error: false
        },
        reducers: {
            getProductStart:(state)=>{
                state.isFetching=true;
                state.error=false
            },
            getProductSuccess:(state,action)=>{
                state.isFetching=false;
                state.products=action.payload
            },getProductError:(state)=>{
                state.isFetching=false;
                state.error=true
            },
            deleteProductStart:(state)=>{
                state.isFetching=true;
                state.error=false
            },
            deleteProductSuccess:(state,action)=>{
                state.isFetching=false;
                state.products.splice(state.products.findIndex((item)=>item._id===action.payload),1);
            },
            deleteProductError:(state)=>{
                state.isFetching=false;
                state.error=true
            }
,addProductStart:(state)=>{
    state.isFetching=true;
    state.error=false
},
addProductSuccess:(state,action)=>{
    state.isFetching=false;
    state.products.push(action.payload);
},
addProductError:(state)=>{
    state.isFetching=false;
    state.error=true
},updateProductStart:(state)=>{
    state.isFetching=true;
    state.error=false
},
updateProductSuccess:(state,action)=>{
    state.isFetching=false;
    state.products[state.products.findIndex((item)=>item._id===action.payload.id)]=action.payload.product;
},
updateProductError:(state)=>{
    state.isFetching=false;
    state.error=true
}
        },
    })
export const { getProductError,getProductStart,getProductSuccess,deleteProductError,deleteProductStart,deleteProductSuccess,updateProductError,updateProductStart,updateProductSuccess,addProductError,addProductStart,addProductSuccess } = productSlice.actions
export default productSlice.reducer