import React from 'react'

import {Link} from 'react-router-dom';
import Navbar2 from '../components/Navbar2';

import cot from  "../static/cot.jpg"
import banq from  "../static/banq.jpg";
import res from  "../static/res.jpg";
import pool from  "../static/pool.jpg"
import about from "../static/about.jpg"
import ImageLoader from '../components/imageloader';
function About() {
    return (
        <div>
             <Navbar2 activekey="link-2"></Navbar2> 
      
    <div className="container aboutus" style={{marginTop:"5%"}}>
        <div className="row">
            <div className="col-md-6 col-12 my-auto" style={{borderRadius:"20px" , marginTop:"5%"}}>
                {/* <img src={about} alt="about us" className="img-fluid" style={{borderRadius:"20px" , marginTop:"5%"}} /> */}
                <ImageLoader 
              className="about-img img-fluid rounded" 
              src={about}
          />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia eligendi dolorem molestias nesciunt aliquam deserunt velit fuga quidem atque?</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contactus" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company"  style={{ marginTop:"5%"}} >
            <h1 className="display-4">About The Grand Bay Resort</h1>
            <div className="pt-4">
                <p className="about_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, illum delectus sequi necessitatibus cum laudantium incidunt minima, voluptatibus voluptas repellat officia doloremque magnam quis, accusamus tenetur, quasi doloribus iusto quia distinctio labore optio reprehenderit aperiam suscipit dignissimos aliquid! Odit distinctio quam, excepturi repellendus sunt magni adipisci sit architecto placeat tempore numquam, ipsam nobis vitae aperiam reprehenderit inventore ipsum facilis? Sapiente iure id explicabo. Omnis, architecto quaerat! Architecto error ducimus consequuntur, asperiores fugiat nostrum veniam eaque aspernatur ab quas aliquam ipsa! Odit expedita voluptate, mollitia tenetur eveniet quisquam a veritatis. In, odit. Enim aliquid voluptates vitae pariatur facilis beatae odio labore est, voluptatem officiis! Maiores, iure molestias aliquam suscipit rem impedit veritatis architecto delectus molestiae tempora inventore beatae consectetur facere voluptas dolores labore, laboriosam officiis non alias minima dolorum fuga corrupti blanditiis. Laudantium consequatur, aspernatur beatae dicta atque labore. Molestiae illum, possimus, officia sit nihil, cupiditate nesciunt, consequatur nulla deleniti veniam modi maxime impedit delectus iste totam earum vel repellendus doloribus in quae fuga. Dignissimos, unde eius voluptatem iusto est nesciunt quaerat temporibus velit doloribus a id laborum repellendus fugit nihil, animi facilis quisquam nemo tempora accusantium doloremque libero magnam dolorum veritatis vel aspernatur. Enim reiciendis laborum, expedita illum, aliquam eaque!</p>
            </div>
        </div>
        <div className="testimony">
            <h1 className="display-4 mb-4">Gallery</h1>


           



            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={banq} className="text-center img-fluid " width="450" height="400" alt="customer1" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Banquet Hall</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={pool} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Swimming Pool</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={cot} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Cottages</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={res} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Restaurant</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
    </div>
    )
}
export default About;