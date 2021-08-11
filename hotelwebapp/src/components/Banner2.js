import React from 'react';

import './navitems2.css'
import Logo from  "../static/ban6.jpg"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import ImageLoader from '../components/imageloader';


const Banner=(props)=>{
    return(
        <>


<div className="banner">

{/* <img src={Logo} height="500px" width="100%" /> */}
 <div class="banner-wrap " style={{maxHeight:"400px" ,marginBottom:"",marginTop:""}}>
<ImageLoader 
              className="img-fluid banner-img2" 
              src={props.im}
          />
          </div> 
   
<div className="bannerlink">
    {props.title}
    <Link to="/">
    <Button className="buttext " variant="outline-warning" size="lg">
      Home
    </Button>
    </Link>
</div>

</div>

</>

    )
}
export default Banner;