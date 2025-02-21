import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cartSlice";
import { api } from "../features/auth/api";
import { authApi } from "../features/auth/authApi";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { searchApi } from "../features/searchApi";

// Persist config for auth
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token", "isAuthenticated", "role"],
};

// Persist config for cart
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartItems"], // Ensure only necessary state is persisted
};

// Wrap reducers with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      api.middleware,
      authApi.middleware,
      searchApi.middleware
    ),
});

// Persistor for persisting the store
export const persistor = persistStore(store);
export default store;
