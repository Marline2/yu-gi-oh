import "./Main.scss";
import YouTube from 'react-youtube';

function Main() {

  return (
    <div>
      <section className="Main">
        <div className="title">
          <h1>Yu-Gi-Oh!</h1>
          <div className="white_zone">
            <div className="youtube">
              <YouTube
              videoId="auAQ_A--c5I"
              opts={{
                width:"100%",
                height:"270px",
                playerVars:{
                  autoplay:1,
                  modestbranding: 1,
                  loop:1,
                  playlist:"auAQ_A--c5I"
                }
              }}
              onReady={(e)=>{e.target.mute()}} />
            </div>
          </div>
        </div>

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
      </section>
      <section className="Intro">안녕</section>
    </div>
  );
}

export default Main;
