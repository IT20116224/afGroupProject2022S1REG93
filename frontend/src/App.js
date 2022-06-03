import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import {Routes, Route} from 'react-router-dom'
import Logout from './components/Logout';
//import { useState } from 'react';
import RegisterTopic from './components/RegisterTopic';
import RequestSupervisor from './components/RequestSupervisor';
import RequestCosupervisor from './components/RequestCosupervisor';

function App() {

  //Check if user is logged in
  /*const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {

    try {

      const res = await fetch ('/auth' , {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },

        credentials : "include"
      });

      if(res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401) {
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  } */


  return (
   <>
      <Navbar/> 
      <Routes>
        <Route exact path="/" element= {<Home/>} /> 
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} auth={true} />
        <Route exact path="/register" element={<Register/>} auth={true} />
        <Route exact path="/logout" element={<Logout/>} auth={true} />
        <Route exact path="/registerTopic" element={<RegisterTopic/>} />
        <Route exact path="/requestSupervisor" element={<RequestSupervisor/>} />
        <Route exact path="/requestCoSupervisor" element={<RequestCosupervisor/>} />
      </Routes>
      <Footer/>
   </>
  );
}

export default App;
