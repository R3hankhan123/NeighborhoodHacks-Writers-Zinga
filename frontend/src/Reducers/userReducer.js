import { createReducer} from "@reduxjs/toolkit";

const initalState={}

export const userReducer=createReducer(initalState,{

    loginRequest:(state)=>{
        state.loading=true;
    },
    loginSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;

    },
    loginFailure:(state,action)=>{
        state.loading=false

        state.error=action.payload;
    },

    registerRequest:(state)=>{
        state.loading=true;
    },
    registerSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
    },
    registerFailure:(state,action)=>{
        state.loading=false

        state.error=action.payload;
    },

    LoadUserRequest:(state)=>{
        state.loading=true;
    },
    LoadUserSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
    },
    LoadUserFailure:(state,action)=>{
        state.loading=false

        state.error=action.payload;
    },


})