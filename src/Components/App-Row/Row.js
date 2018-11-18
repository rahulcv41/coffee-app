/**
 * Component - Row
 * MaterializeCSS static grid-row component
 * @see {@link https://materializecss.com/grid.html | Grid}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * @class
 * @name Row
 * @description MaterializeCSS grid Row.
 * @extends Component
 */

class Row extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}
export default Row;