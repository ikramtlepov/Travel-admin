import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "./slices/destinationSlice";
import tourSlice from "./slices/tourSlice";
import usersSlice from "./slices/usersSlice";

import pageActionSlice from "./slices/pageActionSlice";


export const store = configureStore({
    reducer : {
         destinationSlice,
         tourSlice,
         usersSlice,
         pageActionSlice
    }
})