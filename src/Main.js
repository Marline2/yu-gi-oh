import React from "react";
import "./Main.scss";
import $ from 'jquery';

const Main = () => {



  return (
    <div id="fullpage">
      <div className="section active">
        <h1 className="title">Yu-Gi-Oh!</h1>
        <div className="charactors">
          <img src={require("./img/kaiba.png")} alt="kaiba" />
          <img src={require("./img/yugi.png")} alt="yugi" />
          <img src={require("./img/joey.png")} alt="joey" />
        </div>
      </div>
      <div className="section">
        <h1 className="title">Yu-Gi-Oh!</h1>
        <div className="charactors">
          <img src={require("./img/kaiba.png")} alt="kaiba" />
          <img src={require("./img/yugi.png")} alt="yugi" />
          <img src={require("./img/joey.png")} alt="joey" />
        </div>
      </div>
      <div className="section">
        <h1 className="title">Yu-Gi-Oh!</h1>
        <div className="charactors">
          <img src={require("./img/kaiba.png")} alt="kaiba" />
          <img src={require("./img/yugi.png")} alt="yugi" />
          <img src={require("./img/joey.png")} alt="joey" />
        </div>
      </div>
    </div>
  );
};

export default Main;
