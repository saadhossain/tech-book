import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './components/Routes';

function App() {
  const router = createBrowserRouter([
    Routes
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
