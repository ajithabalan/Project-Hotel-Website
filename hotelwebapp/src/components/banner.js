import React from 'react';
import './navitems.css'
import Logo from  "../static/ban2.jpg"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import ImageLoader from '../components/imageloader';

const Banner=()=>{
    return(
        <>


<div className="banner">

{/* <img src={Logo} height="500px" width="100%" /> */}
 <div class="banner-wrap1" style={{height:"400px",marginBottom:"350px"}}>
<ImageLoader 
              className="img-fluid banner-img2 " 
              src={Logo}
          />
</div> 
   
<div className="banner-link">
    Luxury At Its Best <p>Rooms Starts at Rs 5000</p>
    <Link to="./rooms">
    <Button className="buttext" variant="outline-secondary" size="lg">
      Search Rooms
    </Button>
    </Link>
</div>

</div>



</>

    )
}
export default Banner;