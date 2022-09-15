import "./Main.scss";
import YouTube from "react-youtube";
import Clock from "react-live-clock";

function Main() {
  return (
    <div className="All">
      <section className="Home">
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
      <section className="Menu">
        <h2>Menu</h2>
        <div className="clickable">
          <div>
            <div className="img_size">
              <img src={require("./img/menu1.png")} alt="image_menu" />
            </div>
            <h4>Top Cards</h4>
            <p>These are the most commonly used cards in the Yu-Gi-Oh! TCG.</p>
          </div>
          <div>
            <div className="img_size">
              <img src={require("./img/menu2.png")} alt="image_menu" />
            </div>
            <h4>Decks</h4>
            <p>Search the Yu-Gi-Oh! Deck Respository.</p>
          </div>
          <div>
            <div className="img_size">
              <img src={require("./img/menu3.png")} alt="image_menu" />
            </div>
            <h4>Card Database</h4>
            <p>Search the Yu-Gi-Oh! Cards</p>
          </div>
          <div>
            <div className="img_size">
              <img src={require("./img/menu4.png")} alt="image_menu" />
            </div>
            <h4>Articles</h4>
            <p>TCG Articles written by YGOPRODECK's Author</p>
          </div>
        </div>
      </section>
      <section className="Rules">
        <h2>Rules</h2>
        <p>
          The following rule updates & clarifications (some of which have
          already been in effect) are in e ffect at in-person and remote duel
          events at all lev els. These will be incorporated into an upcoming
          rulebook update. <br />
          <br />
          1. Fusion, Synchro, and Xyz Monsters can be first Summoned from the
          Extra Deck to any of your Main Monster Zones. They do not have to be
          Summoned to the Extra Monster Zone or a spot that a Link Monster is
          pointing to. You can still Summon a Fusion/Synchro/Xyz Monster from
          the Extra Deck to your Extra Monster Zone if you want to, though. (The
          restrictions requiring an Extra Monster Zone or Link Monster pointing
          still apply to Link Monsters and Pendulum Monsters that are Summoned
          from the Extra Deck.) <br />
          <br />
          2. If a monster’s Trigger Effect meets its a ctivation conditions, BUT
          hasn’t yet had a chance to actually activate yet (because i t’s still
          in the middle of a chain or card ef fect, for example) and is
          therefore being “saved for later”, BUT its location* changes between
          the ti me its Trigger Effect activation is met, and the tim e it
          actually has a chance to activate, its effect does no t activate. [*On
          the field, in the Graveyard, in the hand, banished, or in the Deck.]{" "}
          <br />
          <br />
          3. The restriction of “you cannot Normal or S pecial Summon the turn
          you activate this card” only refers to monsters that were successfully
          summ oned. Same for “you can only Special Summon X once p er turn”
          restrictions. <br />
          <br />
          4. Trap Monsters that say “This card is also st ill a Trap.” do not
          occupy both a Monster Zon e and a Spell & Trap Zone. They are only in
          the Monster Zone (where the card actually is) and do not take up a
          Spell & Trap Zone. <br />
          <br />
          5. Page 51 of the rulebook, under “Leaves the F ield”: “When a monster
          on the field is shuffled into t he Main Deck, or becomes an Xyz
          Material, it is no longe r a card on the field, however its effects
          that activate when it “leaves the field” will not activate.” “Main
          Deck” s hould be “Deck” (and therefore also includes the Extra Deck).
        </p>
      </section>
      <section className="Info">
        <h2>Info</h2>
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
            villains.
            <br />
            <br />
            It began as a manga in Japan in 1996, the Yu-Gi-Oh! franchi se has
            since grown to an immensely successful global brand, spawning
            various manga and anime series, a real-life version of the card game
            featured in the story, video games, toys, and many other products.
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
            it appears.
            <br />
            <br />
            Designed by Kazuki Takahashi, Magic & Wizards (M&W), is a popular
            card game worldwide. Compared with its predecessor, M&W was very
            simple when it was first introduced in the manga: there were only
            two types of cards (Monster & Magic Cards); the result of a monster
            battle only relied on the Attack and Defense Points of the monsters
            and the effects of Magic Cards (which only appeared occasionally).
            According to the author, the game was designed as such because he
            felt that the rules of Magic the Gathering were too complicated, and
            he wanted to create something similar but simpler.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Main;
