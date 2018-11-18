import React, { Component } from "react";

import Carousel from "../app-carousel/Carousel";
import Row from "../App-Row/Row";
import Hero from "../hero/Hero";
import Container from "../app-container/Container";
import Card from "../app-card/Card";
import Footer from "../app-footer/Footer";

import json_data from "../../model/data.json";

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: json_data,
      cart: []
    };
  }

  handleCartData = (data) => {
    this.setState({
      cart: [...this.state.cart, data]
    })
  }
  render() {
    return (
    <div>
        <Carousel
          type="carousel-slider"
          carouselOptions={{ fullWidth: false, indicators: true }}
          interval={3000}
          imageData={["img/slider4.jpg","img/slider5.jpg","img/slider3.jpg"]} />

       <Row>
          <Container>
            <Hero />
            <Row>
              {this.state.data.data.map((item, key) => {
                return(<Card key={key} 
                  name={item.name} 
                  imageUrl={item.image} 
                  product={item} 
                  cart={this.handleCartData}/>);
              })}
            </Row>    

          </Container>
        </Row>
        <Footer />
    </div>
    );
  }
}

export default Home;
