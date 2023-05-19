import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Product from './component/Product';
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';
import RootLayout from './component/RootLayout';

function App() {
const route=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element ={<Dashboard/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Route>
))

  return (
    <div className="App">
   <RouterProvider router={route}/>
    </div>
  );
}

export default App;
