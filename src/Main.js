import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <section className="title_zone">
        <div className="charactors">
          <img src={require('./img/kaiba.png')} alt="kaiba" />
          <img src={require('./img/yugi.png')} alt="yugi" />
          <img src={require('./img/kuriboh.png')} alt="kuriboh" />
        </div>
        <h1 className="title">Yu-Gi-Oh!</h1>
      </section>
    </div>
  );
};

export default Main;
