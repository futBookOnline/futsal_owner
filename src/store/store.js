import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "@/store/features/auth/register";

const store =  configureStore({
reducer: { registerReducer }
});

export default store