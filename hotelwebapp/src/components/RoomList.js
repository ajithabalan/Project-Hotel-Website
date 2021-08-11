import React,{useState} from 'react'
import Title from './Title'
import Container from 'react-bootstrap/Container'
import Deluxe from '../static/deluxe.jpg'
import PR from '../static/doubledeluxe.jpg'
import DD from '../static/presidential.jpg'
import DE from '../static/doubleexcecutive.jpg'
import DS from '../static/doublestandard.jpg';
import SS from '../static/single.jpg'
import './FeaturedRooms.css'
import DisplayRoom from './DisplayRoom'


function RoomList() {
    
    

const people=[1,2,3];


const roomlist=[
    {
        icon:PR,
        title: "Presidential",
        price: "Rs 25000",
        occupancy:3
        
    },
     {
        icon:DD,
        title: "SuperDeluxe",
        price: "Rs 20000",
        occupancy:2
        
    },
    
     {
        icon:Deluxe,
        title: "DoubleDeluxe",
        price: "Rs 15000",
        occupancy:2
       
    },
   
    {
        icon:DE,
        title: "DoubleExecutive",
        price: "Rs 12000",
        occupancy:1
       
    },
    {
        icon:DS,
        title: "DoubleStandard",
        price: "Rs 10000",
        occupancy:2
        
    },
    {
        icon:SS,
        title: "SingleAC",
        price: "Rs 5000",
        occupancy:1
        
    },
   
]

const [rooms, setRooms] = useState(roomlist);



const handleChangeCapacity=(event)=>{
    
    const capacity=event.target.value;      
  
if ( capacity != "") {
          const tempRooms = roomlist.filter(room => room.occupancy >= capacity);
          setRooms(tempRooms);
        }
}






    return (

       
        <div>
             <Title title="Our Rooms" position="d-flex pt-3 justify-content-center text-secondary " />
             <Container>
             <div className="row ">
                <div className="col-md-6 col-12 ">
                    <form >
                   
                    <div className="form-group">
                        <label htmlFor="capacity">Maximum Guests in a Room</label>
                        <select name="capacity" id="capacity"   className="form-control custom_select" onChange={handleChangeCapacity}>
                        <option value="" disabled selected>0</option>
                        {people.map(time => {
                                  return (
                                                <option value={time}> {time} </option>
                                         )
                                              })}
                        </select>
                    </div>
                    
                    </form>
                </div>
                
            </div>
            </Container>
            {/* <RoomDisplay Rooms={rooms}></RoomDisplay> */}
            <DisplayRoom  Rooms={rooms}></DisplayRoom>
             
        </div>
    )
}

export default RoomList
