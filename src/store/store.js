import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "@/store/features/auth/register";

export default configureStore({
reducer: { registerReducer }
});

