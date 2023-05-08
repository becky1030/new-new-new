import React from "react";
import Slider from "react-slick";
import "../styles/History.css";
import nyc from "../assets/nyc.jpeg";
import nyu from "../assets/nyu.jpeg";
import bk from "../assets/bk.jpeg";
import manhattan from "../assets/chelsea.jpeg";
import empire from "../assets/empire.jpeg";
import dumbo from "../assets/dumbo.webp";
import grand from "../assets/grand.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discounts() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,

    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="history">
      <Slider {...settings}>
        <div>
          <img src={manhattan} style={{ width: 550, height: 400 }} />
          <h3 className="text">Chelsea 1653</h3>
        </div>
        <div>
          <img src={nyu} style={{ width: 550, height: 400 }} />
          <h3 className="text">NYU women's dorm 1870</h3>
        </div>
        <div>
          <img src={bk} style={{ width: 550, height: 400 }} />
          <h3 className="text">Brooklyn Bridge 1788</h3>
        </div>
        <div>
          <img src={grand} style={{ width: 550, height: 400 }} />
          <h3 className="text">Grand Central Station 1577</h3>
        </div>
        <div>
          <img src={empire} style={{ width: 550, height: 400 }} />
          <h3 className="text">Empire State Building 1921</h3>
        </div>
        <div>
          <img src={dumbo} style={{ width: 550, height: 400 }} />
          <h3 className="text">Dumbo 1768</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Discounts;
