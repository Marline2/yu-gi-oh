import axios from "axios";
import React from "react";
import "../scss/TopCards.scss";

function TopCards() {
  const [db, setDB] = React.useState(null);
  const [list, setList] = React.useState([]);

  const prize_list = list.slice(0, 3);

  const loadDBVersion = async () => {
    const res = await axios.get(
      "https://db.ygoprodeck.com/api/v7/checkDBVer.php"
    );
    setDB([res.data[0].database_version, res.data[0].last_update]);
  };

  const loadDB = async () => {
    let lists = [];
    const res = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes"
    );
    res.data.data.map((v) => {
      let vote = v.misc_info[0].upvotes - v.misc_info[0].downvotes;
      if (vote >= 300) {
        lists.push({ vote, v });
      }
    });

    lists.sort((a, b) => {
      return b.vote - a.vote;
    });

    setList(lists);
  };
  console.log(list);

  React.useEffect(() => {
    loadDBVersion();
    loadDB();
  }, []);
  return (
    <div className="All_topCards">
      <header>
        <h3>Yi-Gi-Oh!</h3>
        <ul>
          <li>Top Cards</li>
          <li>Decks</li>
          <li>Card Database</li>
          <li>Articles</li>
        </ul>
      </header>
      <section className="Main">
        <img src={require("../img/menu1.png")} alt="top_cards" />
        <div className="texts">
          <h2>Top Cards</h2>
          <p>These are the most commonly used cards in the Yu-Gi-Oh! TCG.</p>
          {db !== null ? (
            <h4>
              Database Version : {db[0]} <br /> Last Update : {db[1]}
            </h4>
          ) : null}
        </div>
      </section>
      <section className="Podium">
        {prize_list.map((value, idx) => {
          if (idx === 0) {
            return (
              <div className="First" key={idx}>
                <h4>1st</h4>
                <p>Upvote : {value.vote}</p>
                <div className="in">
                  <img src={value.v.card_images[0].image_url} alt="top_cards" />
                  <h3>{value.v.name}</h3>
                </div>
              </div>
            );
          } else if (idx === 1) {
            return (
              <div className="Second" key={idx}>
                <h4>2st</h4>
                <p>Upvote : {value.vote}</p>
                <div className="in">
                  <img src={value.v.card_images[0].image_url} alt="top_cards" />
                  <h3>{value.v.name}</h3>
                </div>
              </div>
            );
          } else if (idx === 2) {
            return (
              <div className="Thrid" key={idx}>
                <h4>3st</h4>
                <p>Upvote : {value.vote}</p>
                <div className="in">
                  <img src={value.v.card_images[0].image_url} alt="top_cards" />
                  <h3>{value.v.name}</h3>
                </div>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}
export default TopCards;
