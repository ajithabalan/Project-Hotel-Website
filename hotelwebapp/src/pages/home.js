import React from 'react'
import Navbar from '../components/navbar';
import Keyfeatures from '../components/keyfeatures';
import Banner from '../components/banner';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <div>
            <Navbar ></Navbar>
             <Banner></Banner>                      
            
            <Keyfeatures></Keyfeatures>
            <FeaturedRooms></FeaturedRooms>
            
            
           
       </div>

    )
}