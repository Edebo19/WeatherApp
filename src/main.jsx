import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WeatherProvider } from "./components/Main/context/WeatherContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./components/Global/store.js";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <WeatherProvider>
      <PersistGate loading="Loading..." persistor={persistor}>
        <App />
      </PersistGate>
      </WeatherProvider>
    </Provider>
    <Toaster/>
  </StrictMode>
);
