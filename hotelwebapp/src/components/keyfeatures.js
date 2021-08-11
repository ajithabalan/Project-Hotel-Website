import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Keyfeatures extends Component {
    
    state={
       
        services:[
            
            {
                icon:<FaCocktail color="blue" fontSize="3em" />,
                title: "Free CockTail",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaHiking color="blue" fontSize="3em"/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaShuttleVan color="blue" fontSize="3em"/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaBeer color="blue" fontSize="3em" />,
                title: "Unlimited Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },

        ],
    
    }
    render() {
        return (
            <div className="container  mt-5">
             <Title title="Services" position="d-flex justify-content-center text-secondary " />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service flex-column d-flex gap-2 justify-content-around ">
                                <span className="d-flex justify-content-center ">{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
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