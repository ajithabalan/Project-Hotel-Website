import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Rooms from './pages/rooms';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';
import Booking from './components/booking';
import SelectedRoom from './components/SelectedRoom';
import Footer from './components/footer';
import Navbar from './components/navbar';

function Rout() {
           
  

    return (
      <div >
         
         <Navbar></Navbar>
        <Router>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactUs" component={Contact} />
            <Route exact path="/rooms/" component={Rooms}/>          
             <Route exact  path="/rooms/:selectedroom" component={SelectedRoom}/>        
  
            <Route exact path="/rooms/booking/:selectedroom" component={Booking}/>  
           
           
          </Switch>
          
        </Router> 
        
         <Footer></Footer>
      </div>
    );
  }
  
  export default Rout;
  