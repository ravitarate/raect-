import {BrowserRouter,Route,Routes} from "react-router-dom"
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
function App() {
  return (
    <div>
     <BrowserRouter>
     <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
     </div>
     </BrowserRouter>
     </div>
  );
}

export default App;


