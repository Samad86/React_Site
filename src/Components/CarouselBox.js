import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Sunset1 from "../assets/sunset1.jpg";
import Sunset2 from "../assets/sunset2.jpg";
import Sunset3 from "../assets/sunset3.jpg";
import Sunset4 from "../assets/sunset4.jpg";
import Sunset5 from "../assets/sunset5.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Sunset1} alt="Sunset_photo" />
          <Carousel.Caption>
            <h3>Sunset image 1</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              est?
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sunset2} alt="Sunset_photo" />
          <Carousel.Caption>
            <h3>Sunset image 2</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              est?
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sunset3} alt="Sunset_photo" />
          <Carousel.Caption>
            <h3>Sunset image 3</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              est?
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sunset4} alt="Sunset_photo" />
          <Carousel.Caption>
            <h3>Sunset image 4</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              est?
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sunset5} alt="Sunset_photo" />
          <Carousel.Caption>
            <h3>Sunset image 5</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              est?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
