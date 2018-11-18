
import React, {Component} from "react";


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="page-footer white">
            <div className="footer-copyright brown darken-4">
              <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
              
        )
    }
}
export default Footer;