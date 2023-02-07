import { configureStore } from "@reduxjs/toolkit";
import LaunchesSlice from "../features/launches/LaunchesSlice";

const store=configureStore({
    reducer:{
        Launches:LaunchesSlice
    }
})

export default store;