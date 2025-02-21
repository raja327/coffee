import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store, { persistor } from "./state/store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer
        autoClose={1000}
        position="top-right"
        pauseOnHover={false}
      />
    </StrictMode>
  </Provider>
);
