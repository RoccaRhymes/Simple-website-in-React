import React, { Component } from "react"
import Carousel from 'react-bootstrap/Carousel'
import fast from "../assets/fast.jpg"
import dfast from "../assets/dfast.jpg"

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
              
              <Carousel.Item>
               
               <img
                  className="d-block w-100"
                  src={fast}
                  alt="Speed"
                />
                  
                  <Carousel.Caption>
                     <h3>Act A Fool</h3>
                     <p>iAmF4T4L Motors</p>
                  </Carousel.Caption>
               
               </Carousel.Item>
               
               
               <Carousel.Item>
               
               <img
                  className="d-block w-100"
                  src={dfast}
                  alt="Engine"
                />
                  <Carousel.Caption>
                     <h3>Engine</h3>
                     <p>iAmF4T4L Motors</p>
                   </Carousel.Caption>
               
               </Carousel.Item>
            
            </Carousel>   
        )    
    }
}