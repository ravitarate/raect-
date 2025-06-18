import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './Component/NavigationBar';
import { TopNews } from './Component/TopNews';
import { AllNews } from './Component/AllNews';
import { Weather } from './Component/Weather';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<TopNews/>}></Route>
      <Route path="/all-news" element={<AllNews/>}></Route>
      <Route path="/weather" element={<Weather/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
