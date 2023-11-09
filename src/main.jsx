import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route.jsx";
import AuthProvider from "./Providers/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Route} />
      </AuthProvider>
    </React.StrictMode>
    ,
  </div>
);
