/**
 * Component - Carousel
 * MaterializeCSS Carousel component
 * @see {@link https://materializecss.com/carousel.html | Carousel}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

import "./style.css";

/**
 * Import Components
 */
import CarouselImage from "./app-carousel-image/CarouselImage";
import CarouselText from "./app-carousel-text/CarouselText";

/**
 * @class
 * @name Carousel
 * @description MaterializeCSS Carousel Row.
 * @extends Component
 */
class Carousel extends Component {
      constructor(props) {
            super(props);
            let config = {
                  ...props
            };
            this.state = {
                  options: {
                        type: config.type || " ",
                        carouselOptions: config.carouselOptions || {},
                        imageData: config.imageData || [],
                        textData: config.textData || [],
                        button: config.button || " ",
                        componentId: this._generateComponentId(),
                        interval: config.interval || 3000
                  }
            };
            this.element;
            this.instance;
      }

      /**
       * @function
       * A helper function to generate a unique identifier for component
       * @name _generateComponentId
       * @returns {String} - A unique random string
       */
      _generateComponentId = () => {
            return Math.random()
                  .toString()
                  .substring(7);
      };

      /**
       * @function
       * A helper function to initialize M.Carousel with passed in parameters
       * @name _componentInit
       * @returns {Object} - The initialized carousel instance (this.instance)
       */
      _componentInit = () => {
            let self = this;
            //get element using a unique id
            self.element = document.querySelector(`#carousel${self.state.options.componentId}`);
            //Defaults
            let options = {
                  duration: self.state.options.carouselOptions.duration || 200,
                  dist: self.state.options.carouselOptions.dist || -100,
                  shift: self.state.options.carouselOptions.shift || 0,
                  padding: self.state.options.carouselOptions.padding || 0,
                  numVisible: self.state.options.carouselOptions.numVisible || 5,
                  fullWidth:
                        (self.state.options.type === "carousel-slider"
                              ? true
                              : self.state.options.type === "carousel-fixed-item"
                                    ? true
                                    : false) ||
                        self.state.options.carouselOptions.fullWidth ||
                        false,
                  indicators: self.state.options.carouselOptions.indicators || false,
                  noWrap: self.state.options.carouselOptions.noWrap || false,
                  onCycleTo: self.state.options.carouselOptions.onCycleTo || null
            };
            //Materializecss init
            self.instance = M.Carousel.init(self.element, options);
      };

      /**
       * DOM ready lifecycle event
       */
      componentDidMount() {
            let self = this;
            self._componentInit();
            if (self.props._instanceData) {
                  self.props._instanceData(self.instance);
            }

            setInterval(() => { this._next(); }, this.state.options.interval);
      }

      /**
       * @function
       * A helper function to get the currenlty initialized carousel
       * @name _getComponentInstance
       * @returns {Oobject} - The currenlty initialized carousel component
       */
      _getComponentInstance = () => {
            return M.Carousel.getInstance(this.element);
      };

      /**
       * @function
       * Move carousel to next slide or go forward a given amount of slides.
       * @inner
       * @name _next
       * @memberof Carousel
       * @param {Number} n - How many times the carousel slides.
       */
      _next = n => {
            this._getComponentInstance().next(n);
      };

      /**
       * @function
       * Move carousel to previous slide or go back a given amount of slides.
       * @inner
       * @name _prev
       * @memberof Carousel
       * @param {Number} n - How many times the carousel slides.
       */
      _prev = n => {
            this._getComponentInstance().prev(n);
      };

      /**
       * @function
       * Move carousel to nth slide
       * @inner
       * @name _set
       * @memberof Carousel
       * @param {Number} i - Index of slide.
       */
      _set = i => {
            this._getComponentInstance().set(i);
      };

      /**
       * @function
       * Destroy plugin instance and teardown.
       * @inner
       * @name _destroy
       * @memberof Carousel
       */
      _destroy = () => {
            this._getComponentInstance().destroy();
      };

      /**
       * Render the carousel
       */
      render() {
            return (
                  <div
                        id={`carousel${this.state.options.componentId}`}
                        className={`carousel ${this.state.options.type} ${
                              this.state.options.textData ? "center" : ""
                              }`}>
                        {this.state.options.imageData.length ? (
                              <CarouselImage imageData={this.state.options.imageData} />
                        ) : (
                                    ""
                              )}
                        {this.state.options.textData.length != 0 ? (
                              <CarouselText
                                    button={this.state.options.button}
                                    textData={this.state.options.textData}
                              />
                        ) : (
                                    ""
                              )}
                  </div>
            );
      }
}
export default Carousel;