import React, { Component } from 'react'
import Title from './Title'
import Deluxe from '../static/deluxe.jpg'
import DoubleDeluxe from '../static/doubledeluxe.jpg'
import Pres from '../static/presidential.jpg'
import './FeaturedRooms.css'


export default class FeaturedRooms extends Component {
    state={
        services:[
            {
                icon:Deluxe,
                title: "Double Deluxe",
               
            },
            {
                icon:Pres,
                title: "Super Deluxe",
                
            },
            {
                icon:DoubleDeluxe,
                title: "Presidential",
                
            },
           
        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Featured Rooms " position="d-flex justify-content-center text-secondary mt-4" />
                <div className="row container">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-auto" key={index}>
                            <div className="card  border-0 p-4">
                                <article className="service ">
                               <div class="container1">
                                
                                
                                <img className="imag2" src={item.icon} height="200px" width="350px" style={{borderRadius:"20px"}} ></img>
                                


                               <div className="middle"><a className="button-name btn btn-outline-secondary" href="./rooms"> EXPLORE ROOMS </a></div>
                               </div>
                                <h6 className="my-1 ml-auto">{item.title}</h6>
                               
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}