import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import Authprovider from "./Providers/Authprovider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </Authprovider>
  </StrictMode>
);
