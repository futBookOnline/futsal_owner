import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "@/store/features/auth/register";
import priceListReducer from "@/store/features/onboarding/priceList";

const store = configureStore({
    reducer: { registerReducer, priceListReducer }
});

export default store