import "./Main.scss";
import { BsChevronDoubleDown } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";

function Main() {

  return (
    <div>
      <div>
        <div className="Main">
          <h1 className="title">
            Yu-Gi-Oh!
            <div className="down_zone">
              <div className="down">
                <span>Enter</span>
                <BsChevronDoubleDown className="down_icon" />
              </div>
            </div>
          </h1>

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
      </div>
    </div>
  );
}

export default Main;
