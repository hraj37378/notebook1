import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './components/context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
// import  Footer  from './components/Footer';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    <NoteState>
    <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
        </Routes>
        </div>
    </Router>
          </NoteState>
          
    </>
  );
}

export default App;
