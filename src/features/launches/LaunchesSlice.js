import axios from 'axios';
const {createSlice, createAsyncThunk}= require("@reduxjs/toolkit");

export const fetchLaunches=createAsyncThunk("posts/fetchLaunches",async()=>{
    const res=await axios.get("https://api.spacexdata.com/v3/launches")
    return res.data
})

const launches=createSlice({
    name:'launches',
    initialState:{
        isLoading:false,
        launches:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLaunches.pending,(state)=>{
            state.isLoading=true
        });
        builder.addCase(fetchLaunches.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.launches=action.payload;
            state.error=null

        });
        builder.addCase(fetchLaunches.rejected,(state,action)=>{
            state.isLoading=false;
            state.launches=[];
            state.error=action.error.message
        })
    }
})
export default launches.reducer;