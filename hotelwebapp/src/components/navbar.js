import React,{useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './navitems.css'




const listenScrollEvent = (event)=> {

const navbar = document.querySelector('.Header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
}


const Navbar2=()=>{
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
    return(
        <>
<div className="Header colo">
<Navbar className="Navbar" expand="lg"  >
  <Container >
    <Navbar.Brand className="link-title" href="./">The Grand Bay Resort</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mx-auto navitem">      

        <Nav.Link className="link-items " href="./">Home</Nav.Link>
        <Nav.Link className="link-items" href="/rooms">Rooms</Nav.Link>
        <Nav.Link className="link-items" href="/aboutus">About Us</Nav.Link>
        <Nav.Link className="link-items" href="/ContactUs">Contact </Nav.Link>      
            
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>




</>

    )
}
export default Navbar2;