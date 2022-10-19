import axios from "axios";
import React from "react";
import MenuHeader from "../components/MenuHeader";
import "../scss/TopCards.scss";

function TopCards() {
  const [db, setDB] = React.useState(null);
  const [list, setList] = React.useState([]);
  const [base, setBase] = React.useState(0);

  let bar_width = 0;

  const prize_list = list.slice(0, 3);
  console.log(prize_list[0])

  const loadDBVersion = async () => {
    const res = await axios.get(
      "https://db.ygoprodeck.com/api/v7/checkDBVer.php"
    );
    setDB([res.data[0].database_version, res.data[0].last_update]);
  };

  const loadDB = async () => {
    let lists = [];
    try {
      const res = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes"
      );
      res.data.data.map((v) => {
        let vote = v.misc_info[0].upvotes - v.misc_info[0].downvotes;
        if (vote >= 300) {
          lists.push({ vote, v });
        }
        return vote;
      });

      lists.sort((a, b) => {
        return b.vote - a.vote;
      });

      setList(lists);
      console.log(lists)
    } catch {
      throw new Error("Network response was not ok.");
    }
  };
  console.log(list);

  React.useEffect(() => {
    loadDBVersion();
    loadDB();
  }, []);
  return (
    <div className="All_topCards">
      <MenuHeader />
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
              <div className="Rank" key={idx}>
                <h4>{idx + 1}st</h4>
                <img src={value.v.card_images[0].image_url} alt="top_cards" />
                <h3>{value.v.name}</h3>
                <p>Upvote : {value.vote}</p>
                <div className="progressBar">
                  <div
                    className="highLight"
                    style={{ width: `${bar_width}%` }}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className="Rank" key={idx}>
                <h4>{idx + 1}st</h4>
                <img src={value.v.card_images[0].image_url} alt="top_cards" />
                <h3>{value.v.name}</h3>
                <p>Upvote : {value.vote}</p>
                <div className="progressBar">
                  <div
                    className="highLight"
                    style={{ width: `${bar_width}%` }}
                  />
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
