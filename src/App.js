import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { BrowserRouter as Router, Routes, Route,useNavigate} from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registerpage from './pages/Registerpage';

const inlineStyle = {
  color: 'blue',
}

function App() {
 return (
  <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/register' element= {<Registerpage/>}/>
        </Routes>
      </Router>
      </>

    );
}

export default App;
