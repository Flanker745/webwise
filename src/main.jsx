import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

// Render the App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
