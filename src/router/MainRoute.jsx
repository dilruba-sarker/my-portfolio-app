import {
  createBrowserRouter,
  
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
  
    Component: Root,
        children:[
             { index: true, Component: Home },
        ]

  },
]);