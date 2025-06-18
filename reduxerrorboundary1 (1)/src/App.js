
import './App.css';
import './theme.css'  
import { Setting } from './Components/Setting';
import { useSelector } from "react-redux";
import { Counter } from './Components/Counter';
function App() {
  const theme=useSelector(state=> state.ThemeReducer.theme);;
  return (
    <div className={theme==='dark'?'Dark': ' '}>
      <Setting></Setting>
      <Counter></Counter>
    </div>
  );
}

export default App;
