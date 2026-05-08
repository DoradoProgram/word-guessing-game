import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Play from "./pages/play";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Scores from "./pages/scores";
import Settings from "./pages/settings";
function App(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/play" element={<Play/>}/>
        <Route path="/scores" element={<Scores/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
      </BrowserRouter>
    );
}



export default App;