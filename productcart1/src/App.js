
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './Components/NavigationBar';
import { AddToCart } from './Components/AddToCart';
import { Cart } from './Components/Cart';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<AddToCart/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

