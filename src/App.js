import './App.css';
import { Routes, Route} from "react-router-dom";
import  One  from "./components/One/One";
import Two from "./components/Two/Two";
import Three from "./components/Three/Three";
import Four from "./components/Four/Four";
import Five from "./components/Five/Five";
import NavBar from "./components/NavBar/NavBar";
const App = () =>{
  return (
    <div className="App">
    <NavBar/>

    <Routes>
    <Route path="/one" element={<One/>}/>
    <Route path="/two" element={<Two/>}/>
    <Route path="/three" element={<Three/>}/>
    <Route path="/four" element={<Four/>}/>
    <Route path="/five" element={<Five/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
