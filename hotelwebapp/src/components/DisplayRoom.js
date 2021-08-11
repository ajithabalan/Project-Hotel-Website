import React from 'react'
import './FeaturedRooms.css';
import Container from 'react-bootstrap/Container';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

function DisplayRoom(props) {
    const history=useHistory();
    
    
    return (
        <div>
            <Container>
            <div className="container-fluid services">
            
                <div className="row d-flex flex-wrap">
                   {
                   props.Rooms.map((item, index) => {
const selectedroom=item.title;
const newTo = { 
    pathname: "/rooms/", 
    param: item.title
  };
                      return(
                        <div className="col-md-4 col-lg-4 col-12 mx-auto my-auto" key={index}>
                            <div className="card  border-0 p-4">
                                <article className="service ">
                               <div class="container1">
                                <img className="imag2" src={item.icon} height="200px" width="350px" style={{borderRadius:"20px"}} ></img>
                               <div className="  mid">

                                   
                                   <Link to={`/rooms/${selectedroom}`} className="btn btn-secondary  text-center" >Features</Link>                                                
                                   </div>
                               </div>
                                <h6 className="my-1 ml-auto">{item.title}<span className="ml-2">starts at {item.price}</span></h6>
                    
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
            </Container>
        </div>
    )
}

export default DisplayRoom
