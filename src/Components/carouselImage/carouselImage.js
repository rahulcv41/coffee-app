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
class carouselImage extends Component {
   constructor(props) {
      super(props);
      this.state ={
        message : this.props.msg || 'Coffee1',
        imageData: this.props.imageData || []
      }
   }
   render() {
      return (
          <Fragment>
            {this.state.imageData.map((item, key) => {
               return (
                  <a key={key} className="carousel carousel-slider" href={`#${key}`}>
                     <img src={item.imageUrl} alt="slider"/>
                  </a>
               );
            })}
          </Fragment>
      );
   }
}
export default carouselImage;