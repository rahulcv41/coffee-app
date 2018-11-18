/**
 * Component - Carousel - CarouselText
 * MaterializeCSS CarouselText component
 * @see {@link https://materializecss.com/carousel.html | CarouselText}
 */

/**
 * Import react library
 */
import React, { Component, Fragment } from "react";

/**
 * @class
 * @name CarouselText
 * @description MaterializeCSS CarouselText Component.
 * @extends Component
 */
class CarouselText extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Fragment>
            <div className="carousel-fixed-item center">
               {this.props.button ? this.props.button : ""}
            </div>
            {this.props.textData.map((item, key) => {
               return (
                  <div
                     key={key}
                     className={`carousel-item ${item.titleColor} ${item.bgColor}`}
                     href={`#${key}`}>
                     <h2> {item.title} </h2>
                     <p className={item.titleColor}> {item.content} </p>
                  </div>
               );
            })}
         </Fragment>
      );
   }
}
export default CarouselText;