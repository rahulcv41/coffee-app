import React, { Component } from 'react';
import "./style.css";

class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            imageUrl: this.props.imageUrl,
            name: this.props.name,
            item: this.props.product
        }
        
    }

    addToCart = () =>{
        this.props.cart(this.state.item);
        M.toast({html: `${this.state.item.name} has been added to cart`, classes: 'green'})
    }
    render() {
        return (
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={this.state.imageUrl} />
                        <span className="card-title">{this.state.name}</span>
                    </div>
                    <div className=" card-content">
                        <p>Espresso based drinks are coffees 
                            made with a cappuccino machine that share three common ingredients: espresso, steamed milk and foam.</p>
                    </div>
                    <div className=" card-action">
                        <a className="btn brown waves-effect " href="#" onClick={this.addToCart}>Add to cart</a>
                        
                        <span className="right offer green-text">&#8377; 400/kg</span>
                        
                        <span className="right price">&#8377; 400/Kg</span>
                        <br/><p>

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
