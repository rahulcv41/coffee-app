/**
 * Component - Container
 * MaterializeCSS static grid-container component
 * @see {@link https://materializecss.com/grid.html | Grid}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * @class
 * @name Container
 * @description MaterializeCSS grid Container.
 * @extends Component
 */

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}
export default Container;