import React from 'react';
// import Navbar2 from '../components/Navbar2';
import Banner2 from '../components/Banner2';
import RoomList from '../components/RoomList';
import Logo from  "../static/ban6.jpg"




function Rooms() 
{
 
    
    return (
        <div>
            {/* <Navbar2  activekey="default"></Navbar2> */}
            <Banner2 title="Available Rooms" im={Logo} ></Banner2>      
            <RoomList></RoomList>     
            
           
        </div>
    )
}


export default Rooms;