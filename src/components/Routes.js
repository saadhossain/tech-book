import About from "./About";
import BookDetails from "./BookDetails";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Main from "./Main";

export const Routes = 

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
]}