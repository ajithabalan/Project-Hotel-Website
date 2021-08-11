import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './navitems2.css'
import { useState } from 'react';

const Navbar2=({actk})=>{
  const [active, setActive] = useState({actk});
    return(
        <>
<div className="Header1 mt-0 ">
<Navbar bg="" expand="lg"  >
  <Container >
    <Navbar.Brand className="link-title" href="./">The Grand Bay Resort</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mx-auto navitem" activeKey={active}
        onSelect={(selectedKey) => setActive(selectedKey)}>      

        <Nav.Link className="link-items" eventKey="link-1" href="/">Home</Nav.Link>
        <Nav.Link className="link-items " eventKey="default" href="/rooms">Rooms</Nav.Link>
        <Nav.Link className="link-items" eventKey="link-2" href="/aboutus">About Us</Nav.Link>
        <Nav.Link className="link-items" eventKey="link-3" href="/ContactUs">Contact </Nav.Link>      
            
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>




</>

    )
}
export default Navbar2;