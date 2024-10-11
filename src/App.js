import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Router, Routes, Route } from 'react';

function App() {
  
  return (
    <div className="App">
      <Login />
      <Signup />
      
    </div>
  );
}

export default App;
