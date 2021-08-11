import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className=" text-dark-50  d-flex align-items-center" style={{minHeight:"50px", backgroundColor:"rgba(194, 194, 173,.5)"}}>
            <div className="container py-1">
                <div className="row d-flex "  >
                    <div className="col-md-6 col-12 my-auto">
                        <small> &copy;The Grand Bay Resort</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex justify-content-end ">
                            <a href="#">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="#">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="#">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="#">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer