import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portafolio from "./pages/Portafolio.jsx";
import Contacts from "./pages/Contacts.jsx";
import "./styles/styles.css"

const router = createBrowserRouter([
  {  
    path: "", 
    element: <Home /> 
  },
  
  {  
    path: "about", 
    element: <About /> 
  },
  
  {  
    path: "projects", 
    element: <Portafolio /> 
  },
  
  {  
    path: "contacts", 
    element: <Contacts /> 
  },
  
  {  
    path: "**", 
    element: <Home /> 
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
