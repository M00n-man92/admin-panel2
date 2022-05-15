import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice(
    {
        name: "user",
        initialState: {
           isFetching: false,
            currentUser: null,
            error: false
        },
        reducers: {
            loginStart:(state)=>{
                state.isFetching=true;
                state.currentUser=null
            },
            loginSuccess:(state,action)=>{
                state.isFetching=false;
                state.currentUser=action.payload;
                state.error=false;
             
            },loginError:(state)=>{
                state.isFetching=false;
                state.error=true;
            },
            logoutStart:(state)=>{
                state.isFetching=true;
                
            },
            logoutSuccess:(state)=>{
                state.isFetching=false;
                state.currentUser=null
            },
            logoutError:(state)=>{
                state.isFetching=false;
                state.error=true
            }

        },
    })
export const { loginError,loginStart,loginSuccess,logoutError,logoutStart,logoutSuccess } = userSlice.actions
export default userSlice.reducer