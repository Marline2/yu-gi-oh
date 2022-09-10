import "./Main.scss";
import YouTube from "react-youtube";
import Clock from "react-live-clock";

function Main() {
  return (
    <div className="All">
      <section className="Main">
        <div className="title">
          <h1>Yu-Gi-Oh!</h1>
          <div className="white_zone">
            <div className="youtube">
              <YouTube
                videoId="auAQ_A--c5I"
                opts={{
                  width: "100%",
                  height: "270px",
                  playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    loop: 1,
                    playlist: "auAQ_A--c5I",
                  },
                }}
                onReady={(e) => {
                  e.target.mute();
                }}
              />
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
      <section className="Time">
        <Clock format={"ddd, MMMM Do, YYYY"} ticking={true} timezone={"Rok"} />
        <br />
        <Clock
          className="time"
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"Rok"}
        />
        <h5>For Your Best Experience</h5>
      </section>
      <section className="Intro">
        <h2>Intro</h2>
        <div className="_1">
          <div className="img">
            <img src={require("./img/yu_1.png")} alt="charactor1" />
            <img src={require("./img/yu_2.png")} alt="charactor2" />
          </div>
          <p>
            The Yu-Gi-Oh! (遊☆戯☆王, Yūgiō) manga ran from 1996 to March 8,
            2004. It was created by Kazuki Takahashi, and was one of the most
            popular titles featured in Shueisha's Weekly Shōnen Jump. The manga
            initially focuses on Yugi Mutou, as he transforms into Dark Yugi
            (the Game King), and used a variety of games to fight various
            villains.<br/><br/>
            It began as a manga in Japan in 1996, the Yu-Gi-Oh! franchi
            se has since grown to an immensely successful global brand, 
            spawning various manga and anime series, a real-life version 
            of the card game featured in the story, video games, toys, and many other products.
          </p>
        </div>
        <div className="_2">
          <img src={require("./img/yu_3.png")} alt="charactor3" />
          <p>
            There are several games in the Yu-Gi-Oh! anime and manga that were
            originally created as fictitious games for the series and was later
            turned into real games or video games. The Yu-Gi-Oh! anime and manga
            series introduces an original card game created by Takahashi.
            Different names can be used to refer to the game depending on where
            it appears.<br/><br/>

            Designed by Kazuki Takahashi, Magic & Wizards (M&W), 
            is a popular card game worldwide. Compared with its predecessor, 
            M&W was very simple when it was first introduced in the manga: 
            there were only two types of cards (Monster & Magic Cards); the 
            result of a monster battle only relied on the Attack and Defense
             Points of the monsters and the effects of Magic Cards 
             (which only appeared occasionally). According to the author, 
             the game was designed as such because he felt that the rules 
             of Magic the Gathering were too complicated, 
            and he wanted to create something similar but simpler.
          </p>
        </div>
      </section>
      <section className="Menu">
        우잇
      </section>
    </div>
  );
}

export default Main;
