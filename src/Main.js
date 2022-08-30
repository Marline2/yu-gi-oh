import React from "react";
import "./Main.scss";
import './App.css';

import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Mousewheel, Keyboard} from "swiper";

import "swiper/css";
import "swiper/css/pagination.";



const Main = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{ clickable: true, }}
      mousewheel
      modules={[Pagination, Mousewheel, Keyboard]}
      keyboard
      allowTouchMove
      threshold={20}
      speed={1000}
      className="full_page"
      onActiveIndexChange={(swiper) => {
        console.log(swiper.activeIndex);
      }} 
    >
 
      <SwiperSlide className="swiper_slice">
        <div>
        <h1 className="title">Yu-Gi-Oh!</h1>
        <div className="charactors">
          <img src={require("./img/kaiba.png")} alt="kaiba" />
          <img src={require("./img/yugi.png")} alt="yugi" />
          <img src={require("./img/joey.png")} alt="joey" />
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper_slice">
        <div>
        <h1 className="title">Yu-Gi-Oh!</h1>
        <div className="charactors">
          <img src={require("./img/kaiba.png")} alt="kaiba" />
          <img src={require("./img/yugi.png")} alt="yugi" />
          <img src={require("./img/joey.png")} alt="joey" />
        </div>
        </div>
      </SwiperSlide>
    </Swiper>

  );
};

export default Main;
