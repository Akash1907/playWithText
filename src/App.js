
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

    const[mode, setMode] = useState('light');

    const toggleMode1 = () =>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = '#042745';
        showAlert('Dark mode has been enabled', 'Success!')
      }

      else
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enabled', 'Success!')
      }
    }
    
    const[alert, setAlert] = useState(null);
    const showAlert = (message, type) =>{
      setAlert({
        message : message,
        type : type
      })
      setTimeout ( () =>{
          setAlert(null);
      },1300 )
}    

  return (
    <>
      <Router>
        <Navbar title = "#playWithText" content1 = "About" content2 = "Blog" mode={mode} toggleMode1 = {toggleMode1} />
        <Alert alert = {alert}/>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextArea heading = "Enter your text" mode = {mode} showAlert = {showAlert}/>}/>
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
