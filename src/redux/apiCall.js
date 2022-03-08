import { publicRequest,userRequest } from "../requestMethods";
import { loginError, loginStart, loginSuccess,logoutStart,logoutSuccess,logoutError } from "./userRedux"
import {getProductError,getProductStart,getProductSuccess,deleteProductError,deleteProductStart,deleteProductSuccess,addProductError,addProductStart,addProductSuccess,updateProductError,updateProductStart,updateProductSuccess} from "./productRedux"

export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const reply=await userRequest.post("/user/login",user)
       const res=reply.data
       if(reply.data){dispatch(loginSuccess(reply.data))}
       else {}
        
       
        
    }
    catch(e){
        dispatch(loginError())
    }
}
export const protectYaNeck=async(dispatch)=>{
    dispatch(getProductStart());
    try{
        const reply=await userRequest.get("/product/find")
       const res=reply.data
       if(reply.data){dispatch(getProductSuccess(reply.data))}
       else {}
        
       
        
    }
    catch(e){
        dispatch(getProductError())
    }
}
export const methodMan=async(dispatch,id)=>{
    dispatch(deleteProductStart());
    try{
       console.log(id)
        const reply=await userRequest.delete(`/product/delete/${id}`)
       const res=reply.data

       dispatch(deleteProductSuccess(reply.data))
      
        
       
        
    }
    catch(e){
        dispatch(deleteProductError())
    }
}
export const addProduct=async(product,dispatch)=>{
    dispatch(addProductStart());
    try{
        console.log("were here")
        const reply=await userRequest.post("/product/newproduct",product)
       const res=reply.data
       
       dispatch(addProductSuccess(res.data))
      
        
       
        
    }
    catch(e){
        dispatch(addProductError())
    }
}
export const updateProduct=async(dispatch,payload,id)=>{
    dispatch(updateProductStart());
    try{
       /*  const reply=await userRequest.update(`/product/update/${id}`)
       const res=reply.data */
       const reply=await userRequest.put(`/product/update/:${id}`,payload)
      
       const res=reply.data

       if(reply.data){
           console.log("madeit")
           dispatch(updateProductSuccess(reply.data))}
       
       
        
    }
    catch(e){
        console.log("here is the "+e)
        dispatch(updateProductError())
    }
}
export const userLogout=(dispatch)=>{
    dispatch(logoutStart())
    try{
        dispatch(logoutSuccess())
    }
    catch(e){
        dispatch(logoutError())
    }

}