import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

  return (

    <Carousel>
        <div>
            <img src="/storage/images/carousel/1.jpg" alt="1"/>
        </div>
        <div>
            <img src="/storage/images/carousel/2.jpg" alt="2"/>
        </div>
        <div>
            <img src="/storage/images/carousel/3.jpg" alt="3"/>
        </div>
    </Carousel>

  )
}
export default Home