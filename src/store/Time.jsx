import { createSlice } from "@reduxjs/toolkit";


const timeSlice = createSlice({

    name: "time",
    initialState: {
        IST : "",
        CET : ""
    },

    reducers: {
        setISTTime: (state, action) => {    
            // console.log("inside  reducer",action.payload)
            const IST = action.payload;              
            state.IST = IST      
        },
        setCETTime: (state, action) => {    
            // console.log("inside  reducer",action.payload)
            const CET = action.payload;              
            state.CET = CET      
        }    
    },  

})

export const timeReducer = timeSlice.reducer
export const   {setCETTime, setISTTime} = timeSlice.actions