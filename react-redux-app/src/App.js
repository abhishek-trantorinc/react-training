import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";
const router = createBrowserRouter([
    {
        "path": "/",
        element: <Home/>
    },
    {
        path:"results",
        element:<Results/>
    }
])

function App() {
  return (<>

      <RouterProvider router={router}>
      </RouterProvider>

  </>);
  }

export default App;
