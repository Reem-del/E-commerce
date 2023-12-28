import{Routes,Route, BrowserRouter} from 'react-router-dom';
import Check from './check';
import Home from './component/Home';
import ProductsDetail from './component/productsdetail';
import Cart from './component/cart';
import Login from './component/login';
import './App.css';



function App() {
 
  return (
    <>
   <BrowserRouter>
    <Routes>
   <Route  path='/' element={ <Login />} />
   <Route  element={ <Check />} >
     <Route  path='/Home' element={<Home />} />
    <Route  path='productsdetail/:id' element={<ProductsDetail />} />
    <Route  path='cart' element={<Cart />} />
   </Route>
    </Routes>
    </BrowserRouter>
    
 
    </>
    
  );
}

export default App;
