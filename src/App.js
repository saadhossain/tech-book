import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import BookDetails from './components/BookDetails'
import ErrorPage from './components/ErrorPage'
function App() {
  const router = createBrowserRouter([
    {path:'/', 
    element:<Main></Main>, 
    children:[
      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {
        path:'/books',
        loader: async () =>{
          return fetch('https://api.itbook.store/1.0/new');
        },
        element:<Books></Books>},
      {path:'/about', element:<About></About>},

      {
        path:'/book/:bookId',
        loader:async({params})=>{
          return fetch(`https://api.itbook.store/1.0/books/${params.bookId}`);
        },
        element:<BookDetails></BookDetails>
      },
      {path:'*', element:<ErrorPage></ErrorPage>}
    ]},
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
