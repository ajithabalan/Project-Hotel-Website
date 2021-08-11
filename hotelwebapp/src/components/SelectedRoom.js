



import React, { Component } from 'react'
import defaultBcg from '../static/deluxe.jpg';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Banner2 from '../components/Banner2';

 import Logosd from  "../static/supdel.jpg"
import Logop from  "../static/pres.jpg"
 import Logos from  "../static/sin.jpg"
import Logost from  "../static/dost.jpg"
import Logodd from  "../static/dde.jpg"
import Logode from  "../static/de.jpg"





export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            selectedroom: this.props.match.params.selectedroom,
            defaultBcg
        };
    }
    
    render() {
        var selectroom=this.state.selectedroom;
        var rooms = [
            { name: "Presidential", capacity: '3', size: '250 sqft',breakfast:true,pets:true,price:25000 ,img:Logop},
            { name: "SuperDeluxe", capacity: '2', size: '200 sqft',breakfast:true,pets:false,price:2000,img:Logosd },
            { name: "DoubleDeluxe", capacity: '2', size: '180 sqft',breakfast:true,pets:false,price:15000,img:Logodd },
            { name: "DoubleExecutive", capacity: '2', size: '150 sqft',breakfast:true,pets:false,price:12000 ,img:Logode},
            { name: "DoubleStandard", capacity: '2', size: '120 sqft',breakfast:true,pets:false,price:10000, img:Logost},
            { name: "SingleAC", capacity: "1", size: '100 sqft',breakfast:false,pets:false,price:5000,img:Logos },         
                
                 ]
        
         var room = rooms.find(room => room.name == selectroom);

        if(!room){
            
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such room could be found...</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,img} = room;
        
        return (
            <>
             <Navbar2 activekey="link-4"></Navbar2>
             
        <Banner2 title={room.name} im={img} ></Banner2>  
    
            
           
            <section className="single-room container ">
              <div className=" ">
               <div className="single-room-info row">
                   <article className="desc col-md-6 mx-auto col-12">
                       <div className="row">
                      <h3>Details</h3>
                      <p >lorese Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Perferendis exercitationem ducimus eos optio sunt, 
                          laboriosam, animi dicta at dolore esse quis eum temporibus 
                          ullam amet odio saepe magni velit rem!laboriosam, animi dicta at
                           dolore esse quis eum temporibus 
                          ullam amet odio saepe magni velit rem!
                          ullam amet odio saepe magni velit rem!laboriosam, animi dicta at
                           dolore esse quis eum 
                          </p>
                          </div>
                          <div className="row">
                              <ul><h2>Extras</h2></ul>
                              <li>Internet</li>
                              <li>Spacious Rooms
                            <li>Comfortable Beds</li>
                              </li>
                          </div>
                   </article>
                   
<div className="col-md-6 col-12 my-auto">
                            <h1>Rooms Details</h1>
                            <table className="table" style={{borderStyle:"solid"}}>
                                <thead className="thead-light">
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{capacity}</td>
                                    </tr>
                                    <tr>
                                        <th>Size</th>
                                        <td>{size} </td>
                                    </tr>
                                    <tr>
                                        <th>Breakfast</th>
                                        <td>{breakfast === true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Pets</th>
                                        <td>{pets ===true ? `Allowed` : `Not Allowed`}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>



               </div>
               </div>
            </section>
            <section className="room-extras ml-4 row">
                <div className="col-md-1"></div>
                
                <div className="p-4 clearfix">
                    <div className="row">
                        <div className="col-md-6"></div>
                       <div className="col-md-3 col-12 ">
                          <Link to={`/rooms/booking/${this.state.selectedroom}`} className="btn btn-outline-secondary btn-block btn-lg  ">Book Now</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
    
