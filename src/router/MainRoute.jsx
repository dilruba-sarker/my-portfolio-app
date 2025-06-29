import {
  createBrowserRouter,
  
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import ContractMe from "../Component/Pages/ContractMe";
import DetailsGa from "../Component/DetailsGa";
import Details2 from "../Component/Details2";

export const router = createBrowserRouter([
  {
    path: "/",
  
    Component: Root,
        children:[
             { index: true, Component: Home },
             {
                path:"/contract-me",
                element:<ContractMe></ContractMe>
             },{
              path:"/detalils",
              element:<DetailsGa></DetailsGa>
             },{
              path:"/details2",
              element:<Details2></Details2>
             }
        ]

  },
]);