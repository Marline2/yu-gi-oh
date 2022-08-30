import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <Swiper
      direction={"vertical"} // 슬라이드의 방향을 수직으로 설정합니다.
      pagination={{ clickable: true }} // 우측의 점을 클릭했을 때, 클릭한 슬라이드로 이동하게 됩니다.
      mousewheel // 마우스 휠 동작을 허용합니다.
      keyboard // 키보드 방향키에 의한 동작을 허용합니다.
      modules={[Pagination, Mousewheel, Keyboard]} // 페이지네이션, 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
      allowTouchMove // 터치 동작을 허용합니다.
      className="main_slider"
      threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.
      speed={1000} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
      onActiveIndexChange={(swiper) => {
        console.log(swiper.activeIndex);
      }}
    >
      <SwiperSlide>
        <div className="All">
          <h1 className="title">Yu-Gi-Oh!</h1>

          <div className="card">
            <img src={require("./img/card.jpg")} alt="card" />
            <img src={require("./img/card.jpg")} alt="card" />
            <img src={require("./img/card.jpg")} alt="card" />
            <img src={require("./img/card.jpg")} alt="card" />
          </div>

          <div className="charactors">
            <img src={require("./img/kaiba.png")} alt="kaiba" />
            <img src={require("./img/yugi.png")} alt="yugi" />
            <img src={require("./img/joey.png")} alt="joey" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  );
}

export default App;
