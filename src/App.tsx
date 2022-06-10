import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Menu/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="/sign-in" element={<Login />}/>
            <Route path="**" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
