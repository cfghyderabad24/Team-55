import "./App.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from "./components/RootLayout";
import Home from './components/home/Home';
import ErrorRoute from "./components/ErrorRoute";
function App() {
  let router=createBrowserRouter([
   {
    path:'',
    element:<RootLayout />,
    errorElement:<ErrorRoute />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:"home",
        element:<Home/>
      },
    ]
   }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;