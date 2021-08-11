import React from 'react'
import Banner2 from '../components/Banner2';
import './contact.css';
import Logo from  "../static/contact.jpg"

const Contact=() =>{
    return (
        <div className="cont-us container-fluid">        
        <Banner2 title="Our Contact Details" im={Logo} ></Banner2>            

    
	<div id="colorlib-footer" role="contentinfo">
		<div className="overlay"></div>
		<div className="container">
			<div className="row row-pb-md">
				<div className="col-md-4 colorlib-widget">
						<h3>The Grand Bay Resort</h3>
						<ul className="colorlib-footer-links">
							<li> Kadugodi, Seegehalli, Bengaluru,<br/> Karnataka 560067</li>
							<li><a href="#"><i className="icon-phone"></i> 7338000555 / 7022564989</a></li>
							<li><a href="#"><i className="icon-mail"></i> ajitha0602@gmail.com</a></li>
					    </ul>
					</div>
					<div className="col-md-4 colorlib-widget">
					<h3>Office Timings</h3>
					     <li>MON - SAT : 09:30 AM - 01:30 PM / 04:30 PM - 08:30 PM</li>
							<li>Fri: 6:00 – 21:00</li>
							<li>SUNDAY : 10:00 AM - 2:00 PM </li>		
					</div>
					
					
					<div className="col-md-4 colorlib-widget">
					<h3>Contact Us</h3>
					<form className="contact-form">
						<div className="form-group">
							<label for="name" className="sr-only">Name</label>
							<input type="name" className="form-control" id="name" pattern="[a-zA-Z0-9]+" maxlength="14" minlength="4" placeholder="Name" required/>
						</div>
						<div class="form-group">
							<label for="number" className="sr-only">Phone No</label>
							<input type="text" className="form-control" id="no" placeholder="Phone No"  pattern="[0-9]{10}" required/>
						</div>
						<div class="form-group">
							<label for="email" className="sr-only">Email</label>
							<input type="email" className="form-control" id="email" placeholder="Email" required/>
						</div>
						
						<div class="form-group">
							<label for="message" className="sr-only">Message</label>
							<textarea className="form-control" id="message" rows="3" placeholder="Message" required></textarea>
						</div>
						<div class="form-group">
							<input type="submit" id="btn-submit" className="btn btn-primary btn-send-message btn-md" value="Send Message"/>
						</div>
					</form>
				</div>
                </div>
		</div>
		<div class="row ">
			<div class="col-md-12 text-center">
				<p>
					<small class="block"> 
                            | All rights reserved | Desinged by |Ajitha Balakrishnan.|
                    </small> 
				
				
				</p>
			</div>
		</div>
	</div>

    









</div>
                    





        
    )
}

export default Contact;
    
