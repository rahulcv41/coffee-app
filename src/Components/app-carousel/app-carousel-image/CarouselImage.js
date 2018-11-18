/**
 * Component - Carousel - CarouselImage
 * MaterializeCSS CarouselImage component
 * @see {@link https://materializecss.com/carousel.html | CarouselImage}
 */

/**
 * Import react library
 */
import React, { Component, Fragment } from "react";

/**
 * @class
 * @name CarouselImage
 * @description MaterializeCSS CarouselImage Component.
 * @extends Component
 */
class CarouselImage extends Component {
   constructor(props) {
      super(props);
   }

   alert = () => {
     alert('hello');
   }
   render() {
      return (
          <Fragment>
            {this.props.imageData.map((item, key) => {
               return (
                  <a key={key} className="carousel-item" href={`#${key}`} onClick={this.alert}>
                     <img src={item} />
                  </a>
               );
            })}
          </Fragment>
      );
   }
}
export default CarouselImage;